import React, { useState } from 'react';
import {TextInput, Text, View,FlatList, RefreshControl,TouchableOpacity,StyleSheet,Dimensions,ImageBackground,Image} from 'react-native';

//PANTALLA COMPRA     -----------------------------SCREEN comprarFrutas-----------------------------------------------------------------
function comprarFrutas({navigation}){
    const [fruit,setFruit] = useState('');
    const [price,setPrice] = useState('');
    const [text] = React.useState(null);
//-----------------------------------------------------POST API-----------------------------------------------------------------
    const onPress = () => {
        fetch('http://10.0.2.2:8080/fruits', {
        method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name" : fruit.toLowerCase(),
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

//--------------------------------------------Imagenes-----------------------------------------------------------------
function mostrarImagen(name) {
    
  return (name ==='piña')?<Image  style={styles.fruta} source={require('./../resources/piña.png')} />
  : (name ==='naranja')?<Image  style={styles.fruta} source={require('./../resources/naranjas.png')} />
  : (name ==='fresa')?<Image  style={styles.fruta} source={require('./../resources/fresas.png')} />
  : (name ==='manzana')?<Image  style={styles.fruta} source={require('./../resources/manzana.png')} />
  : (name ==='platano')?<Image  style={styles.fruta} source={require('./../resources/platanos.png')} />
  : (name ==='uva')?<Image  style={styles.fruta} source={require('./../resources/uvas.png')} />
  : (name ==='melocoton')?<Image  style={styles.fruta} source={require('./../resources/melocoton.png')} />
  : (name ==='kiwi')?<Image  style={styles.fruta} source={require('./../resources/kiwis.png')} />
  : <Image  style={styles.fruta} source={require('./../resources/peras.png')} />;
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
//--------------------------------------------RETURN-------------------------------------------------------------------
    return(  
      <View>
        <ImageBackground source={require('./../resources/fondo1.jpg')} style={styles.fondo} >
        <Text style={styles.titulo}>Añadir</Text>
        <TextInput style={styles.input1}
        value={text}
        placeholder="Introduce Nombre Fruta"
        keyboardType="default"
        onChangeText={x => setFruit (x)}
      />

      <TextInput style={styles.input2}
        value={text}
        placeholder = "Introduce Precio Fruta"
        keyboardType="numeric"
        onChangeText={x => setPrice (x)}
      />
      <Image style={styles.linea} source={require('./../resources/linea.png')} />
       <TouchableOpacity  style={styles.boton}
         title ="Añadir Fruta"
         onPress={onPress}>
        <Text style={styles.text}>Añadir fruta</Text>
        <Image style={styles.imagen} source={require('./../resources/compra.png')}/> 
      </TouchableOpacity>
      </ImageBackground>
      </View>
    );
  }
  //--------------------------------------------ESTILO-----------------------------------------------------------------
  let ScreenHeight = Dimensions.get("window").height;
  let ScreenWidth = Dimensions.get("window").width;
  const styles = StyleSheet.create({
    titulo: {
      width: ScreenWidth, height: 80, textAlign: 'center', color: '#d6d5de',
      fontSize: 20, backgroundColor: '#1c2d3e', paddingTop: 25
    },
    text:{
      color:"#CCD4E3",
    },
    input1:{
        marginTop:10,
        height: 40,
        width: 170,
        margin: 12,
        padding: 10,
        backgroundColor:"#28354B"
    },
    input2:{
        height: 40,
        width: 170,
        margin: 12,
        padding: 10,
        backgroundColor:"#28354B"
    },
    boton:{
      height: 40,
      width: 170,
      margin: 12,
      borderWidth: 1,
      backgroundColor:"#28354B",
      padding: 10,
    },
    imagen:{
      marginLeft:110,
      marginTop:-30,
      width:50,height:50,
      
    },
    linea: {
      width: ScreenWidth, height: 30, alignSelf: 'center',marginRight:65
    },
    fondo: {
      width: ScreenWidth, height: ScreenHeight
    }
  });
  export default comprarFrutas;