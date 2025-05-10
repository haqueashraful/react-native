import { StyleSheet, Text } from "react-native";
import { useState } from "react";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constants/Colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useUser();

  const handleSubmit = async () => {
    setError(null);
    try {
    await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Log in to your account
      </ThemedText>

      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder={"Email"}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder={"Password"}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>Register</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
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
