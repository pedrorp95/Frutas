import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Frutas from '../container/Frutas';

const Stack = createStackNavigator();

export default function StackFrutas() {

  return (
  <Stack.Navigator>

      <Stack.Screen name='Historia' component={Frutas} options={{ 
        headerTitleStyle:{
          color:'#d6d5de', 
        },
         headerStyle: {
            backgroundColor: '#1c2d3e',
          },}} />
      
    </Stack.Navigator>
  );
}