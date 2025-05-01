import * as securestore from "expo-secure-store";
import { Platform } from "react-native";
import { TokenCache } from "@clerk/clerk-expo/dist/cache";

const CreateTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await securestore.getItemAsync(key);

        return item;
      } catch (error) {
        console.log(error);
      }
    },

    saveToken: async (key: string, value: string) => {
      return securestore.setItemAsync(key, value);
    },
  };
};


export const tokenCache = Platform.OS !== "web" ? CreateTokenCache() : undefined;
