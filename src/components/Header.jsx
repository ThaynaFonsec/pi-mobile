import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Feather";

export default function Header({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-beetween",
        alignItems: "stretch"
      }}
    >
      <Appbar.Header style={{ backgroundColor: "#03113c" }}>
        <Icon2
          name="menu"
          size={50}
          color={"white"}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <Appbar.Content
          title="My awesome app"
          style={{ alignItems: "center", right: "3%" }}
        />
        <Icon
          name="sign-out"
          size={40}
          color={"white"}
          onPress={() => navigation.dispatch(DrawerActions.jumpTo("Login"))}
        />
      </Appbar.Header>
    </View>
  );
}
