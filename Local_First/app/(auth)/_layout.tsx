
import { Stack,Redirect } from "expo-router";
import {SignedIn, useAuth} from "@clerk/clerk-expo";

const MainLayout = () => {
    const { isSignedIn,isLoaded } = useAuth(); 

    if (!isLoaded) {
        return null;
    }
    if(isSignedIn){
        return <Redirect href={"/(index)/index"} />;
    }
    return (
        <Stack   >
            <Stack.Screen name="index"  options={{ animation:"slide_from_right",title:"Sign In"}}  />
            <Stack.Screen name="signup" options={{ animation:"slide_from_right",title:"Sign Up"}} />
            <Stack.Screen name="reserPassword"  options={{ animation:"slide_from_right",title:"Reset Password"}} />
            <Stack.Screen name="+not-found" options={{ animation:"slide_from_right",title:"Not Found"}} />
        </Stack>
    );
};

export default MainLayout;
