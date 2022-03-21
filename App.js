# ProjetoGazinFilms
/* Aqui está toda a estrutura de navegação do App Projeto navegando entre a tela de login e a Home */

import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import TelaLogin from './src/components/TelaLogin';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer >
      <Stack.Navigator>

        <Stack.Screen
        options={{
        title: null,
        headerTransparent: true,
        hearderShouwn: false }}
        name='TelaLogin'
        component={TelaLogin}
        
        />

        <Stack.Screen
          
          
          options={{
            headerBackVisible: false,
            title: '',
            headerTransparent: true,
            hearderShouwn: false }}
         
         
         name='Home'
         component={Home}
        />

      </Stack.Navigator>

    </NavigationContainer>

   
  );
}





export default App;
