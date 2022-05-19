import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header.jsx";

const Dashboard = ({ navigation }) => {
  return (
    <View>
      {/* nome do time */}
      <Header screenName={"Só Canelas F.C."} />
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
