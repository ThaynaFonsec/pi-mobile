import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FootballFieldScreen from "../components/FootballFieldScreen.jsx";
import Header from "../components/Header.jsx";

const Dashboard = ({ navigation }) => {
  return (
    <View>
      {/* nome do time */}
      <Header screenName={"Só Canelas F.C."} />
      <FootballFieldScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
