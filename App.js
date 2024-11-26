
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen'; // Import HomeScreen từ file riêng
import LoginScreen from './screen/LoginScreen'; // Import LoginScreen từ file riêng

// Tạo Stack Navigator
const Stack = createStackNavigator();

// Thiết lập Stack Navigator và Navigation Container
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng nhập' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
