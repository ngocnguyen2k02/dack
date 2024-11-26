// HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/styles'; // Import file styles.js

// Màn hình chính (Home) sau khi đăng nhập
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Chào mừng đến với hệ thống quản lý phòng trọ Thảo Nguyên!</Text>
    </View>
  );
}

export default HomeScreen;
