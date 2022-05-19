import * as React from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard.jsx";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      // screenOptions={{ headerShown: false }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="DashBoard"
        component={Dashboard}
        options={{
          title: "My home",
          headerStyle: {
            fontWeight: "bold",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row-reverse",
            textAlign: "flex-end",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            opacity: "0.7"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row-reverse",
            textAlign: "flex-end",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            opacity: "0.7"
          }
        }}
      />
    </Drawer.Navigator>
  );
}
