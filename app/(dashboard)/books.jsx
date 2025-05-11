import { StyleSheet, FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Colors } from "../../constants/Colors";
import { useBooks } from "../../hooks/useBooks";
import { useUser } from "../../hooks/useUser";

const Books = () => {
  const { getBooksByUser } = useBooks();
  const { user } = useUser();
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBooksByUser({ user }).then(setBookList);
  }, [user]);

  const renderItem = ({ item }) => (
    <View style={styles.bookItem}>
      <ThemedText style={styles.bookTitle}>{item.title}</ThemedText>
      <ThemedText style={styles.bookAuthor}>By: {item.author}</ThemedText>
      <ThemedText style={styles.bookDescription}>{item.description}</ThemedText>
    </View>
  );

  return (
    <ThemedView safe style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.heading}>
        Your Books List
      </ThemedText>

      <FlatList
        data={bookList}
        renderItem={renderItem}
        keyExtractor={(item) => item.$id} 
        contentContainerStyle={styles.flatListContainer}
      />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  flatListContainer: {
    flexGrow: 1, 
    width: "100%",
  },
  bookItem: {
    backgroundColor: Colors.uiBackground,
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookTitle: {
    fontSize: 16,
    color: Colors.title,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "gray",
    marginVertical: 4,
  },
  bookDescription: {
    fontSize: 12,
    color: Colors.text,
  },
});
