import React from "react";
import { View, StyleSheet } from "react-native";

const FootballField = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    color: "green",
    border: "10px solid silver"
  }
});

export default FootballField;
