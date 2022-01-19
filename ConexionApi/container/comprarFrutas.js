import React, { useState } from 'react';
import {TextInput, Text, SafeAreaView, TouchableOpacity,StyleSheet,Dimensions,ImageBackground} from 'react-native';

//PANTALLA COMPRA     -----------------------------SCREEN comprarFrutas-----------------------------
function comprarFrutas({navigation}){
    const [fruit,setFruit] = useState('');
    const [price,setPrice] = useState('');
    const [text] = React.useState(null);
    const onPress = () => {
        fetch('http://10.0.2.2:8080/fruits', {
        method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name" : fruit,
          "price" : price
        }),
    })
    .then ((responseJson) => {
      console.log('gettin data from fetch',responseJson);
      Alert.alert("Fruta añadida correctamente");
      setFruit(fruit);
      setPrice(price);
    }) 
  .catch(error => console.log(error));
    }

    return(  
      <SafeAreaView >
        <ImageBackground source={require('./../resources/fondo1.jpg')} style={styles.fondo} >
        <TextInput
        styles={styles.boton}
        value={text}
        placeholder="Introduce Nombre Fruta"
        keyboardType="default"
        onChangeText={x => setFruit (x)}
      />
      <TextInput
        styles={styles.boton}
        value={text}
        placeholder="Introduce Precio Fruta"
        keyboardType="numeric"
        onChangeText={x => setPrice (x)}
      />
       <TouchableOpacity styles={styles.text}
         title="Añadir Fruta"
         onPress={onPress}>
        <Text styles={styles.text}>Añadir fruta</Text>
      </TouchableOpacity>

      

      </ImageBackground>
      </SafeAreaView>
    );
  }

  //----------------------------------------------------------------------------------------ESTILO----------------------------------------------------------------------------------------
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
    },
    boton: {

        backgroundColor: '#1c2d3e', alignSelf: 'center', borderRadius: 8,

        width: 150, height: 50, paddingTop: 14, paddingLeft: 18,

        elevation: 25,

       

    }
  });
  export default comprarFrutas;