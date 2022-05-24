import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Feather";
import players from "../data/Players";
import { Appbar } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Market(props, { params }) {
  const [searchPosition, setSearchPosition] = useState("");
  const positions = ["Goleiro", "Defensor", "Meia", "Atacante"];
  const navigation = useNavigation();
  function FilterGroup() {
    const [activate, setActivate] = useState(positions[0]);

    return (
      <View style={styles.filterWrapper}>
        {positions.map((position, idx) => {
          if (position == searchPosition) {
            return (
              <Pressable
                style={styles.buttonActivate}
                onPress={() => {
                  setSearchPosition(position);
                }}
              >
                <Text style={styles.labelActivate}>{position}</Text>
              </Pressable>
            );
          } else {
            return (
              <Pressable
                style={styles.buttonDisable}
                onPress={() => {
                  setSearchPosition(position);
                }}
              >
                <Text style={styles.labelDisable}>{position}</Text>
              </Pressable>
            );
          }
        })}
      </View>
    );
  }

  return (
    <>
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
            title="Mercado da Bola"
            style={{ alignItems: "center", right: "3%" }}
          />
          <Icon3
            name="sign-out"
            size={40}
            color={"white"}
            onPress={() => navigation.goBack()}
          />
        </Appbar.Header>
      </View>

      {FilterGroup()}
      <ScrollView style={{ flex: 1, marginTop: 10 }}>
        <View style={styles.cardGroupWrapper}>
          {players
            .filter((val) => {
              if (searchPosition === "") {
                return val;
              } else if (val.position.includes(searchPosition)) {
                return val;
              }
            })
            .map((player, idx) => (
              <View style={styles.cardWrapper}>
                <View style={styles.cardAvatar}>
                  <Image
                    source={{ uri: player.avatarUrl }}
                    style={{ height: 80, width: 72, borderRadius: 64 }}
                  />
                </View>
                <View style={styles.playerInfo}>
                  <Text style={{ fontWeight: "bold" }}>{player.name}</Text>
                  <Text style={{ opacity: 0.7 }}>{player.position}</Text>
                  <Text style={{ opacity: 0.7 }}>{player.team}</Text>
                  <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                    {player.price}
                  </Text>
                </View>
                <Pressable style={styles.buttonAction}>
                  <Icon
                    name="add"
                    color="white"
                    fontWeight="bold"
                    onPress={() => navigation.navigate("Main")}
                  />
                </Pressable>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#E5E5E5"
  },
  filterWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "white",
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  },
  buttonDisable: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "white",
    width: 70,
    height: 24,
    backgroundColor: "white"
  },
  buttonActivate: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "white",
    width: 70,
    height: 24,
    backgroundColor: "#03113C"
  },
  labelDisable: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#03113C"
  },
  labelActivate: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white"
  },
  cardGroupWrapper: {
    alignItems: "center",
    justifyContent: "center"
  },
  cardWrapper: {
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    height: 96,
    width: 272,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: "#03113C",
    borderRadius: 16
  },
  cardAvatar: {
    flex: 2,
    alignItems: "center"
  },
  playerInfo: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonAction: {
    flex: 1,
    height: 24,
    borderRadius: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});
