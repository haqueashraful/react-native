import { createContext, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";
import { useRouter } from "expo-router";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  async function login(email, password) {
    try {
        await account.createEmailPasswordSession(email, password);
        const response = await account.get();
        if (!response) {
          return;
        }
        router.push("/");
        setUser(response);
      } catch (error) {
        throw Error(error.message);
      }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function logout() {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      throw Error(error.message);
    }
  }
  

  return (
    <UserContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
