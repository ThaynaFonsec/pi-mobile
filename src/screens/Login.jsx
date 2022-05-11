import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.content}>
            <Image style={styles.image} source={require("../assets/images/mainLogo.svg")} />
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <View >
                        <LogsButton title={'Log in'} />
                    </View>
                    <View style={{ paddingTop: 40 }}>
                        <LogsButton title={'Register'} />
                    </View>
                </View>
                <Text style={styles.logo}>Login</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        value={password}
                        onChangeText={(text) => setPassword(text)} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: "flex-start",

    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#03113c",
        marginBottom: 40,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E5E5E5'
    },
    homescreen_opts: {
        backgroundColor: 'transparent',
        margin: 8
    },
    image: {
        width: 160,
        height: 200,
        alignSelf: "center"
    },
    buttonWrapper: {
        paddingHorizontal: 16,
        paddingTop: 190,
        alignItems: 'center'
    }
});