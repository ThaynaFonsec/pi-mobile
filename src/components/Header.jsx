import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function Header({ screenName }) {
  const navigation = useNavigation();
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
          style={{ paddingRight: 10, paddingLeft: 10 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Appbar.Content
          title={screenName}
          style={{ alignItems: "center", right: "3%" }}
        />
        <Icon
          name="sign-out"
          size={40}
          color={"white"}
          onPress={() => navigation.goBack()}
        />
      </Appbar.Header>
    </View>
  );
}