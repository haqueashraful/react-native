import { StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Colors";
import { useBooks } from "../../hooks/useBooks";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createBook } = useBooks();
  const { user } = useUser(); 

  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    if (!title || !description) {
      setError("Please fill all fields");
      return;
    }
    try {
      await createBook({
        title,
        description,
        author: user?.name || user?.email || "Unknown",
        userId: user?.$id,
      });

      Alert.alert("Success", "Book created successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ThemedView safe style={styles.container}>
      <ThemedText title style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer />

      <ThemedTextInput
        placeholder="Book Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Spacer />

      <ThemedTextInput
        placeholder="Book Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={[styles.input, { height: 100 }]}
      />
      <Spacer />
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <ThemedText style={styles.buttonText}>Create Book</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: Colors.title,
    fontWeight: "bold",
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
