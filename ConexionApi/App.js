import * as React from 'react';
import {  NavigationContainer,   } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stackFrutask from './navigation/stackFrutas';
import stackAñadirFrutas from './navigation/stackAñadirFrutas';

export default function App(){

const Tab = createBottomTabNavigator();

return(

<NavigationContainer  >
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size}) => {
      let iconName;
      if(route.name === "Historia"){
        iconName = focused
        ? "library" 
        : "library-outline";
      } else if (route.name === "Usuarios"){
        iconName = focused ? "person" : "person-outline";
      }

      return <Ionicons name={iconName} size={30} style={{color:'#307dc6'}}/>
        
    },
     
    
  })}
  >
    <Tab.Screen name="Frutas" component={stackFrutask} options={{ headerShown:false }} />

    <Tab.Screen name="Añadir" component={stackAñadirFrutas} options={{ headerShown:false }}/>
    </Tab.Navigator>
</NavigationContainer>

);
}