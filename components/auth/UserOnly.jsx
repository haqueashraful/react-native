import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import ThemedLoader from "../ThemedLoader";

const UserOnly = ({ children }) => {
  const { user, authCheck } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!user && !authCheck) {
      router.replace("/login");
    }
  }, [user, authCheck]);

  if (!user && !authCheck) {
    return <ThemedLoader />;
  }

  return children;
};

export default UserOnly;
