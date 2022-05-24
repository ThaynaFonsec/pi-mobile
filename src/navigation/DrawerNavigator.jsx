import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard.jsx";
import Market from "../screens/Market.jsx";
import Icon3 from "react-native-vector-icons/FontAwesome";

import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, opacity: "0.7" }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
            backgroundColor: "#f6f6f6"
          }}
        >
          <View>
            <Text>Thomas Turban</Text>
            <Text>thomasturban@email.com</Text>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: "white",
          padding: 20
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Icon3 name="sign-out" size={30} color={"black"} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerStyle: { opacity: "1", backgroundColor: "#03113c" },
        drawerLabelStyle: {
          color: "white"
        }
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="DashBoard"
        component={Dashboard}
        options={{
          title: "Dashboard"
        }}
      />
      <Drawer.Screen
        name="Market"
        component={Market}
        options={{
          title: "Mercado da Bola"
        }}
      />
    </Drawer.Navigator>
  );
}
