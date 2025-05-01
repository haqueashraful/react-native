import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedLogo />
      <Spacer height={20} />


      <ThemedText style={styles.title} title>Home</ThemedText>
      <View style={[styles.separator]} />
      <Spacer />
      <ThemedText style={[styles.description]}>
        Open up App.js to start working on your app!
      </ThemedText>
      <Spacer />

      <View style={styles.card}>
        <Text>This is a Card</Text>
      </View>

      <Link style={styles.link} href="/login">
        <ThemedText>Login</ThemedText>
      </Link>
      <Link style={styles.link} href="/register">
        <ThemedText>Register</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "lightgray",
  },
  description: {
    fontSize: 20,
  },

  card: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
    shadowColor: "4px 4px rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  link: {
    fontSize: 20,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});
