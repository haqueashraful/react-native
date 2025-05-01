import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {

    const handleSubmit = () => {
        console.log("pressed");
    }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>Log in to your account</ThemedText>

    <ThemedButton onPress={handleSubmit}>
        <Text style={{color: "#f2f2f2"}}>
            Login
        </Text>
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
    alignItems: "center"
  },
    title: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30
    },
    
});
