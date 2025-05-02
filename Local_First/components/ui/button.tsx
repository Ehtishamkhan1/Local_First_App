import React from "react";
import { ViewStyle, TextStyle } from "react-native";

type ButtonVariant = "filled" | "outlined" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps {
    variant: ButtonVariant;
    size: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    children: React.ReactNode;
    style?: ViewStyle;
    textStyle?: TextStyle;
    onPress: () => void;
}
const Button:React.FC<ButtonProps> = ({variant="filled",size="md",disabled=false,loading=false,children,style,textStyle,onPress}) => {
    return (
        <button></button>
    );
}

export default Button;
