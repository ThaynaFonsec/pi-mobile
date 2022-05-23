import React from "react";
import { View, StyleSheet } from "react-native";
import FootballField from "react-native-football-lineup";
import { home, away } from "../data/team.js";

export default function FootballFieldScreen() {
  return (
    <View style={styles.container}>
      <FootballField home={home} away={away} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    borderColor: "#fff",
    backgroundColor: "#e5e5e5"
  }
});
