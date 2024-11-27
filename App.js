import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserProvider } from './screen/UserContext'; // Import UserProvider
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import UserScreen from './screen/UserScreen';
import ContractScreen from './screen/ContractScreen';
import InvoiceScreen from './screen/InvoiceScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider> {/* Bọc ứng dụng bằng UserProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Đăng nhập' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
          <Stack.Screen name="User" component={UserScreen} options={{ title: 'Tài khoản' }} />
          <Stack.Screen name="Contract" component={ContractScreen} options={{ title: 'Hợp đồng' }} />
          <Stack.Screen name="Invoice" component={InvoiceScreen} options={{ title: 'Hoá đơn' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}