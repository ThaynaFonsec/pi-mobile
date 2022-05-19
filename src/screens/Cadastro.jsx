import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import { TextInput } from "react-native-paper";
import { Button1 } from "../components/Button1.jsx";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleUserRegistration = e => {
    e.preventDefault();
    alert(JSON.stringify({ email, name, password }));
    return navigation.navigate("Login");
  };

  return (
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require("../assets/images/mainLogo.svg")}
      />
      <View style={styles.container}>
        <Text style={styles.logo}>Registrar-se</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome Completo"
            placeholderTextColor="black"
            value={name}
            onChangeText={text => {
              setName(text);
            }}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="black"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={e => handleUserRegistration(e)}
        >
          <Text style={styles.loginText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "space-between",
    border: "5px solid black",
    margin: 25,
    borderRadius: 40,
    borderTopWidth: 30,
    borderTopColor: "#03113c"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#03113c",
    margin: 30
  },
  inputView: {
    width: "90%",
    backgroundColor: "#E5E5E5",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white",
    backgroundColor: "#E5E5E5"
  },
  forgot: {
    color: "black",
    fontSize: 11,

    height: 40,
    marginBottom: 20
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#465881",
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
    justifyContent: "center",
    backgroundColor: "#E5E5E5"
  },
  homescreen_opts: {
    backgroundColor: "transparent",
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
    alignItems: "center"
  }
});
