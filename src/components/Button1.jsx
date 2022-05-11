import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button1 = ({ onPress, title }) => {
    return (

        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>

    );

}


const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "transparent",
        border: "1px solid blue",
        borderRadius: 22,
        margin: "1.5rem",
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "blue",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});