import { ThemedText } from "@/components/ThemedText";
import { useAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Touchable, TouchableOpacity, View } from "react-native";

const Signin=()=>{

      const {Signin,setActive,isLoaded}=useAuth();
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [isSignIn,setIsSignIn]=useState(false);
      const router=useRouter();
    return (
       <View>
        <ThemedText>hi this is auth screen</ThemedText>
        {/* <Link href="/(auth)/reserPassword" style={{color:"blue"}} >reserPassword</Link> */}
        <TouchableOpacity onPress={()=>router.push("/(auth)/reserPassword")}>
            <ThemedText>reserPassword</ThemedText>
        </TouchableOpacity>
       </View>
    );
}

export default Signin;
