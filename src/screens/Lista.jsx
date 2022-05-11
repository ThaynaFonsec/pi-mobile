import React, {useState, useEffect} from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View, StyleSheet,StatusBar} from 'react-native';



const Item = ({ title, status, rodada_atual, fase_atual }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>Status: {status}</Text>
    <Text style={styles.title}>Rodada Atual: {rodada_atual}</Text>
    <Text style={styles.title}>Fase Atual: {fase_atual}</Text>
  </View>
);

export default function Lista({ navigation }) {
    const [campeonato, setCampeonato] = useState([]);

  useEffect(() => {
    async function getCampeonato() {
      try {
        const resposta = await fetch(
          "https://api.api-futebol.com.br/v1/campeonatos",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer live_8f52968d02ad7d589b472cc80dcf48"
            }
          }
        );
        const resultado = await resposta.json();
        setCampeonato(resultado);
      } catch (error) {
        console.error(error);
      }
    }
    getCampeonato();
  }, []);

  const renderItem = ({ item }) => (
    <>
      <Item
        style={styles.list}
        title={item.nome}
        status={item.status ? item.status : "N/A"}
        rodada_atual={
          item.rodada_atual
            ? `${item.rodada_atual.nome} - ${item.rodada_atual.status} (${item.tipo})`
            : "N/A"
        }
        fase_atual={item.fase_atual.nome ? item.fase_atual.nome : "N/A"}
      />
    </>
  );


  
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex :1}}>
       <View style={styles.content}>
          <Text
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
            }}>
            Campeonatos
          </Text>
       
          <Pressable onPress={() => navigation.goBack()}>
          <Text style={{color: 'white'}}>SAIR</Text>
          </Pressable>
      </View>
      <FlatList data={campeonato} renderItem={renderItem} keyExtractor={(item) => item.campeonato_id} />
      <Pressable 
      style={styles.addButton}      
      onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{color: 'white', fontSize: 24, marginBottom: 3, marginTop: 1}}>+</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    height: 56,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 5,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  content: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    backgroundColor: 'blueviolet',
    height: 100,
    alignItems: 'center'
  },
  addButton: {
    position: 'absolute', bottom: 15, right: 15,
    height: 50, width: 50, backgroundColor: 'gray', 
    borderRadius: 30, justifyContent: 'center', 
    alignItems: 'center'
  },
    container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
   item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
})
