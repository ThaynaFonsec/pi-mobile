import React, { useState, useContext } from "react";
import { FieldContext } from "../contexts/FieldTypeContext";
import { View, StyleSheet, Text } from "react-native";
import FootballFieldScreen from "../components/FootballFieldScreen.jsx";
import Header from "../components/Header.jsx";
import Team from "../components/Team.jsx";

const Dashboard = ({ navigation }) => {
  const [screenName, setScreenName] = useState("Só Canelas F.C.");
  const { fieldType } = useContext(FieldContext);

  return (
    <View>
      <Header screenName={screenName} />
      {fieldType === "Campo" ? <FootballFieldScreen /> : <Team />}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
