import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import FootballField from "react-native-football-lineup";
import { home, away } from "../data/team.js";

export default function FootballFieldScreen() {
  return (
    <ScrollView style={styles.container}>
      <FootballField home={home} away={away} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 20
  }
});
