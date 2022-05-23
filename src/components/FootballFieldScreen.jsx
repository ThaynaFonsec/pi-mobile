import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import FootballField from "react-native-football-lineup";

export var home = {
  name: "PORTUGAL",
  full_name: "Portugal",
  module: "4-4-2",
  team: [
    [
      {
        number: 1,
        name: "Patricio",
        position: "Goleiro",
        is_substitute: true, //booleans para futuras lógicas internas do app
        is_injured: true, //booleans para futuras lógicas internas do app
        is_suspended: true, //booleans para futuras lógicas internas do app
        is_out: true //  booleans para futuras lógicas internas do app
      }
    ],
    [
      {
        number: 21,
        name: "Soares",
        position: "Zagueiro"
      },
      {
        number: 3,
        name: "Pepe",
        position: "Zagueiro"
      },
      {
        number: 6,
        name: "Fonte",
        position: "Zagueiro"
      },
      {
        number: 5,
        name: "Guerriero",
        position: "Zagueiro"
      }
    ],
    [
      {
        number: 14,
        name: "Calvalho",
        position: "Lateral Direita"
      },
      {
        number: 8,
        name: "Mountinho",
        position: "Volante"
      },
      {
        number: 11,
        name: "Silva",
        position: "Meia"
      },
      {
        number: 17,
        name: "Guedes",
        position: "Lateral Esquerdo"
      }
    ],
    [
      {
        number: 16,
        name: "Fernandes",
        position: "Atacante"
      },
      {
        number: 7,
        name: "Cristiano Ronaldo",
        position: "Atacante"
      }
    ]
  ],
  home_team_events: [
    {
      id: 203,
      type_of_event: "red-card",
      player: "Silva",
      time: "3'"
    },
    {
      id: 210,
      type_of_event: "yellow-card",
      player: "Fernandes",
      time: "64'"
    },
    {
      id: 210,
      type_of_event: "yellow-card",
      player: "Fonte",
      time: "64'"
    },
    {
      id: 206,
      type_of_event: "substitution-in",
      player: "Fonte",
      time: "31'"
    }
  ]
};

export var away = {
  name: "ESP",
  full_name: "ESPANHA",
  module: "4-2-3-1",
  team: [
    [
      {
        number: 1,
        name: "De Gea",
        position: "Goleiro"
      }
    ],
    [
      {
        number: 18,
        name: "Alba",
        position: "Zagueiro"
      },
      {
        number: 15,
        name: "Ramos",
        position: "Zagueiro"
      },
      {
        number: 3,
        name: "Pique",
        position: "Zagueiro"
      },
      {
        number: 4,
        name: "Nacho",
        position: "Zagueiro"
      }
    ],
    [
      {
        number: 8,
        name: "Koke",
        position: "Meia"
      },
      {
        number: 5,
        name: "Busquets",
        position: "Meia"
      }
    ],
    [
      {
        number: 6,
        name: "Iniesta",
        position: "Lateral Esquerdo"
      },
      {
        number: 22,
        name: "Isco",
        position: "Volante"
      },
      {
        number: 21,
        name: "Silva",
        position: "Lateral direito"
      }
    ],
    [
      {
        number: 19,
        name: "Costa",
        position: "Atacante"
      }
    ]
  ],
  away_team_events: [
    {
      id: 210,
      type_of_event: "yellow-card",
      player: "De Gea",
      time: "12'"
    },
    {
      id: 206,
      type_of_event: "substitution-in",
      player: "Iniesta",
      time: "31'"
    },
    {
      id: 206,
      type_of_event: "substitution-in",
      player: "Costa",
      time: "32'"
    },
    {
      id: 206,
      type_of_event: "red-card",
      player: "Silva",
      time: "31'"
    }
  ]
};

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
