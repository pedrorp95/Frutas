import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, View, Text, RefreshControl, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';



export default function Frutas() {

  const [frutas, setFrutas] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false), getFruits());
  }, []);

  function getFruits() {
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

    fruta:{
      width:50,height:50, 
    },
    fondo: {
      width: ScreenWidth, height: ScreenHeight
    },
    text: {
      textAlign: 'left', color: '#29273d',
      paddingTop: 5, marginRight: 40, fontSize: 15,
    },
    titulo: {
      width: ScreenWidth, height: 80, textAlign: 'center', color: '#d6d5de',
      fontSize: 20, backgroundColor: '#1c2d3e', paddingTop: 25
    },
    linea: {
      width: ScreenWidth, height: 30, alignSelf: 'center',
    },
    caja1:{
      width: 1,height:10, paddingTop: 10, paddingLeft: 40, marginTop: 5 
    },
    caja2:{
      width: ScreenWidth, alignItems: 'flex-end', paddingRight: '10%', marginTop: 10
    }

  });

  function mostrarImagen(name) {
    
    return name ==='Piña'?<Image  style={styles.fruta} source={require('./../resources/piña.jpg')} /> : 
    <Image  style={styles.fruta} source={require('./../resources/peras.jpg')} />;
  }

  function mostrar({ item }) {

    return <View>
      
      <View style={styles.caja1}>{mostrarImagen(item.name)}</View>
      
      <View style={styles.caja2}>
      <Text style={styles.text}> {item.name}      Precio: {item.price}</Text>
      <Image style={styles.linea} source={require('./../resources/linea.png')} />
      </View>
    
    </View>

  }

  return (
      <SafeAreaView>
          <ImageBackground source={require('./../resources/fondo1.jpg')} style={styles.fondo}>

            <Text style={styles.titulo}>Frutas</Text>
            {/* <Text >Esta Son las frutas disponibles:</Text> */}
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
            <Image style={styles.linea} source={require('./../resources/linea.png')} />
          </ImageBackground>
      </SafeAreaView>
  );

}