import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";
 
const Profile = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView safe style={styles.container}>
      <ThemedText title style={styles.heading}>
        Welcome {user?.email}
      </ThemedText>
      <Spacer />
      <ThemedText>
        Time to start reading some books....
      </ThemedText>

      <Spacer />
      <ThemedButton onPress={logout}>
        <Text style={{ color: "f2f2f2" }}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

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
