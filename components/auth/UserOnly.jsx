import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Text } from "react-native";

const UserOnly = ({ children }) => {
  const { user, authCheck } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!user && !authCheck) {
      router.replace("/login");
    }
  }, [user, authCheck]);

  if (!user && !authCheck) {
    return <Text> Loading...</Text>;
  }

  return children;
};

export default UserOnly;
