import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
 
const Books = () => {
  return (
    <ThemedView safe style={styles.container}>
      <ThemedText title style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>
        Time to start reading some books....
      </ThemedText>
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
