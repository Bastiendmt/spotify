import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './containers/Home';
import PlaylistDetail from './containers/PlaylistDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='PlaylistDetail' component={PlaylistDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
