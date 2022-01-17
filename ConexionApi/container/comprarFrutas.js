import React from 'react';
import {TextInput, Text, View, Button,StyleSheet} from 'react-native';

//PANTALLA BUSQUEDA     -----------------------------SCREEN-----------------------------
function comprarFrutas({navigation}){
  const [text, onChangeNumber] = React.useState(null);
    return(
      <View style={style.fondo}>
        <Text style={style.text}></Text>
        <TextInput
        style={style.input}
        onChangeText={x => onChangeNumber(x)}
        value={text}
        placeholder="Introduce Fruta"
        keyboardType="default"
      />
        <Button
          title="Añadir Fruta"
          onPress={() => navigation.navigate('Lista de Usuarios',{edad:number})}
        />
      </View>
    );
  }

  //----------------------------------------------------------------------------------------ESTILO----------------------------------------------------------------------------------------
  const style = StyleSheet.create({
    fondo:{
      backgroundColor: '#C8FDFF'
    },
    header:{
      textAlign:'center',
      backgroundColor: '#C8FDFF'
    },
    text:{
      fontSize: 15,
      color: 'black',
      textAlign:'center',
      fontWeight: 'bold'
    },
    input: {
      marginTop: 465,
      width: 150,
      height: 40,
      borderWidth: 1
    }
  })
  export default comprarFrutas;