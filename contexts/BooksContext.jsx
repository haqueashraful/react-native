import { createContext, useState, useEffect } from "react";
import { ID, Query } from "react-native-appwrite";
import { databases } from "../lib/appwrite"; // already initialized
import { DATABASE_ID, COLLECTION_ID } from "@env";

export const BookContext = createContext();
const databaseID = DATABASE_ID;
const collectionID = COLLECTION_ID;

// const databases = new Databases(client);

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all books
  const getAllBooks = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(databaseID, collectionID, [
        Query.orderDesc("$createdAt"),
      ]);
      setBooks(response.documents);
    } catch (error) {
      throw Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Get a single book by ID
  const getBookById = async (id) => {
    try {
      return await databases.getDocument(databaseID, collectionID, id);
    } catch (error) {
      throw Error(error.message);
    }
  };

  // Fetch all books created by the logged-in user
  const getBooksByUser = async ({ user }) => {
    console.log(user);
    if (!user?.$id) return;

    try {
      setLoading(true);
      const response = await databases.listDocuments(databaseID, collectionID, [
        Query.equal("userId", user.$id),
      ]);
      setBooks(response.documents);
      return response.documents; // ✅ Return books here
    } catch (error) {
      console.error("Error fetching books:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new book
  const createBook = async ({ title, description, author, userId }) => {
    try {
      const response = await databases.createDocument(
        databaseID,
        collectionID,
        ID.unique(),
        {
          title,
          description,
          author,
          userId,
        }
      );
      setBooks((prev) => [response, ...prev]);
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  };

  // Update an existing book
  const updateBook = async (id, updatedData) => {
    try {
      const response = await databases.updateDocument(
        databaseID,
        collectionID,
        id,
        updatedData
      );
      setBooks((prev) =>
        prev.map((book) => (book.$id === id ? response : book))
      );
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  };

  // Delete a book
  const deleteBook = async (id) => {
    try {
      await databases.deleteDocument(databaseID, collectionID, id);
      setBooks((prev) => prev.filter((book) => book.$id !== id));
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        getAllBooks,
        getBookById,
        getBooksByUser,
        createBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
