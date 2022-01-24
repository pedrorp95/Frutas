import React, { useState } from 'react';
import {TextInput, Text, View,FlatList, RefreshControl,TouchableOpacity,StyleSheet,Dimensions,ImageBackground,Image} from 'react-native';
import {Picker} from "@react-native-picker/picker";

//PANTALLA COMPRA     -----------------------------SCREEN comprarFrutas-----------------------------------------------------------------
function comprarFrutas(){
    const [fruit,setFruit] = useState('');
    const [price,setPrice] = useState('');
    const [text] = React.useState(null);
    const [selectedValue, setSelectedValue] = useState("java");

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

//--------------------------------------------RETURN-------------------------------------------------------------------
    return(  
      <View>
        <ImageBackground source={require('./../resources/fondo1.jpg')} style={styles.fondo} >
        <Text style={styles.titulo}>Añadir</Text>
        {/* <TextInput style={styles.input1}
        value={text}
        placeholder="Introduce Nombre Fruta"
        keyboardType="default"
        onChangeText={x => setFruit (x)}
      /> */}

      <Picker
        selectedValue={fruit}
        style={styles.Picker}
        onValueChange={(itemValue) => setFruit(itemValue)}
      >
        <Picker.Item label="Pera" value="Pera" />
        <Picker.Item label="Manzana" value="Manzana" />
        <Picker.Item label="Melocoton" value="Melocoton" />
        <Picker.Item label="Pina" value="Pina" />
        <Picker.Item label="Uva" value="Uva" />
        <Picker.Item label="Fresa" value="Fresa" />
        <Picker.Item label="Platano" value="Platano" />
        <Picker.Item label="Naranja" value="Naranja" />
        <Picker.Item label="Kiwi" value="Kiwi" />
      </Picker>

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
    Picker:{
      height: 50, 
      width: 150,
      backgroundColor:"#28354B",
      marginTop:20,
      marginLeft:13,
      color: 'white'
    },
    input1:{
        marginTop:20,
        height: 40,
        width: 170,
        margin: 12,
        padding: 10,
        backgroundColor:"#28354B"
    },
    input2:{
      marginTop:30,
        height: 40,
        width: 170,
        margin: 12,
        padding: 10,
        backgroundColor:"white",
        elevation: 15,
        borderWidth:1
        
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