import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Cadastro from "../../src/screens/Cadastro";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/Lista";
import AuthContext from "../contexts/AuthContext";
import Lista from "../screens/Lista";


const Stack = createNativeStackNavigator();

export default function App() {
    const { signed } = useContext(AuthContext)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!signed ? (<Stack.Screen name="HomeScreen" component={HomeScreen} />) : (<Stack.Screen name="Login" component={Login} />)}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Dashboard" component={Lista} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
