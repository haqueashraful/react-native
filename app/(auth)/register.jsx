import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("pressed");
    }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>Register for an account</ThemedText>



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


      <ThemedButton onPress={handleSubmit}>
        <Text style={{color: "#f2f2f2"}}>
            Register
        </Text>
    </ThemedButton>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login</ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
    title: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30
    }
});
