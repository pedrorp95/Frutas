import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import comprarFrutas from '../container/comprarFrutas';

const Stack = createStackNavigator();

export default function StackAñadirFrutas() {

  return (
  <Stack.Navigator>

      <Stack.Screen name='Añadir' component={comprarFrutas} options={{ 
        headerTitleStyle:{
          color:'#d6d5de', 
        },
        headerShown:false,
         headerStyle: {
            backgroundColor: '#1c2d3e',
          },}} />
    </Stack.Navigator>
  );
}