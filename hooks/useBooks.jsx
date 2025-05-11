import { useContext } from "react";
import { BookContext } from "../contexts/BooksContext";


export function useBooks() {
    const context = useContext(BookContext)

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }

    return context;
}
