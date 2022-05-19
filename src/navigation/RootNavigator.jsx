import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./DrawerNavigator.jsx"

import Login from "../screens/Login.jsx";
import Cadastro from "../../src/screens/Cadastro.jsx";
import HomeScreen from "../screens/HomeScreen.jsx";
import AuthContext from "../contexts/AuthContext.jsx";

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
                 <Stack.Screen
                     name="MyDrawer"
                     component={MyDrawer}
                     options={{ headerShown: false }}
                        />
            </Stack.Navigator>
        </NavigationContainer>
    );
}