import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, RefreshControl, FlatList, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Frutas() {

  const [frutas, setFrutas] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false), getFruits());
  }, []);

  function getFruits(){
    fetch("http://10.0.2.2:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFrutas(responseJson);
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getFruits();
  }, []);

  let ScreenHeight = Dimensions.get("window").height;
  let ScreenWidth = Dimensions.get("window").width;

  const styles = StyleSheet.create({

    fondo: {
      width: ScreenWidth, height: ScreenHeight
    },
    text: {
      textAlign: 'center', color: '#29273d',
      lineHeight: 30, fontSize: 15,
    },
    titulo: {
      width: ScreenWidth, height: 110, textAlign: 'center', color: '#d6d5de',
      fontSize: 20, backgroundColor: '#1c2d3e', paddingTop: 40
    },
    boton: {
      backgroundColor: '#1c2d3e', alignSelf: 'center', borderRadius: 8,
      width: 150, height: 50, paddingTop: 14, paddingLeft: 18,
      elevation: 25
      
  },
  textBoton: {
    paddingLeft: 23, fontSize: 16, color: '#d6d5de'
},

  });


  function mostrar({ item }) {

    return <Text style={styles.text}>Fruta: {item.name}    Precio: {item.price}</Text>

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <SafeAreaView>
      <ScrollView >
        <ImageBackground source={require('./resources/fondo1.jpg')} style={styles.fondo}>

          <Text style={styles.titulo}>Estas son las frutas</Text>
          <Text></Text>
          <FlatList
            data={frutas}
            renderItem={mostrar}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        </ImageBackground>
      </ScrollView>
      </SafeAreaView>
    </View>
  );

}
