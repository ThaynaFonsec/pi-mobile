import React from "react";
import { home } from "../data/team.js";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image
} from "react-native";

export default function Team() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {home.team[0].map((player, i) => {
          return (
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
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  {`Preço: R$${player.price}`}
                </Text>
              </View>
            </View>
          );
        })}
        {home.team[1].map((player, i) => {
          return (
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
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  {`Preço: R$${player.price}`}
                </Text>
              </View>
            </View>
          );
        })}
        {home.team[2].map((player, i) => {
          return (
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
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  {`Preço: R$${player.price}`}
                </Text>
              </View>
            </View>
          );
        })}
        {home.team[3].map((player, i) => {
          return (
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
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                  {`Preço: R$${player.price}`}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1
  },
  player: {
    border: "1px solid blue",
    width: 100,
    height: 100
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
  }
});
