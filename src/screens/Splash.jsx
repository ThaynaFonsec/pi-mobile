import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export const Splash = () => {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image style={styles.image} source={require("../assets/images/mainLogo.svg")} />

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 200,
        alignSelf: "center"
    }
})
