import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button1 } from "../components/Button1"

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.content}>
            <Image style={styles.image} source={require("../assets/images/mainLogo.svg")} />
            <View style={styles.homescreen_opts}>
                <Button1 title="Log In" onPress={() => navigation.navigate('Login')} />
                <Button1 title="Registrar-se" onPress={() => navigation.navigate('Cadastro')} />
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
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
    }

});