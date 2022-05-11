import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Pressable, SafeAreaView, StatusBar } from 'react-native';

export default function Cadastro({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    paddingLeft: 16,
                    paddingTop: 16,
                    paddingRight: 16,
                    backgroundColor: 'blueviolet',
                    height: 100,
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            flex: 2,
                            color: 'white',
                            fontSize: 24,
                        }}>
                        Novo Campeonato
                    </Text>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={{ color: 'white' }}>SAIR</Text>
                    </Pressable>
                </View>

                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={styles.rotulo}>Nome Campeonato</Text>
                    <TextInput style={styles.input}
                        keyboardType="name-phone-pad"
                    />
                    <Text style={styles.rotulo}>Status</Text>
                    <TextInput style={styles.input}
                        keyboardType="number-pad"
                    />
                    <Text style={styles.rotulo}>Rodada Atual</Text>
                    <TextInput style={styles.input}
                        keyboardType="default"
                    />
                    <Text style={styles.rotulo}>Fase Atual</Text>
                    <TextInput style={styles.input}
                        keyboardType="default"
                    />

                    <View style={{ paddingTop: 24 }}>
                        <Button title="Salvar" color='gray'
                            onPress={() => navigation.navigate('Lista')} />
                    </View>

                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    rotulo: {
        color: 'gray',
        paddingTop: 16
    },
    input: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
});