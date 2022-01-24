import * as React from 'react';
import {  NavigationContainer,   } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import stackFrutas from './navigation/stackFrutas';
import stackAñadirFrutas from './navigation/stackAñadirFrutas';

export default function App(){

const Tab = createBottomTabNavigator();

return(
<NavigationContainer  >
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size}) => {
      let iconName;
      if(route.name === "Frutas"){
        iconName = focused
        ? "down" 
        : "info-outline";
      } else if (route.name === "Añadir"){
        iconName = focused ? "save" : "save-outline";
      }

      return <AntDesign name={iconName} size={30} style={{color:'#307dc6'}}/>
        
    },
     
    
  })}
  >
    <Tab.Screen name="Frutas" component={stackFrutas} options={{ headerShown:false }} />

    <Tab.Screen name="Añadir" component={stackAñadirFrutas} options={{ headerShown:false }}/>
    </Tab.Navigator>
</NavigationContainer>
);
}