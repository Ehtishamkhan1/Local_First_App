import { ThemedText } from "@/components/ThemedText";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

const Signin=()=>{

      const {Signin,setActive,isLoaded}=useAuth();
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [isSignIn,setIsSignIn]=useState(false);
    return (
       <View>
        <ThemedText>hi this is auth screen</ThemedText>
        <Link href="/(auth)/reserPassword" style={{color:"blue"}} >reserPassword</Link>
       </View>
    );
}

export default Signin;
