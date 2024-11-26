// LoginScreen.js
import React, { useState } from 'react';
import { ImageBackground, Image, Text, TextInput, View, Button, Alert } from 'react-native';
import styles from '../css/styles'; // Import file styles.js

const backgroundImage = require('../assets/background.jpg');
const logoImage = require('../assets/logomain.png');

// Màn hình đăng nhập
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Xử lý đăng nhập
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.10:85/datn/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        Alert.alert('Thành công', result.message);
        // Chuyển hướng sau khi đăng nhập thành công
        navigation.replace('Home'); // Chuyển hướng đến màn hình Home
      } else {
        Alert.alert('Lỗi', result.error || 'Đăng nhập thất bại.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Lỗi', 'Không thể kết nối với máy chủ.');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.title}>HỆ THỐNG QUẢN LÝ PHÒNG TRỌ THẢO NGUYÊN</Text>
        <Text style={styles.subtitle}>Hiệu quả - Chuyên nghiệp - Tiết kiệm chi phí</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Button title="Đăng nhập" onPress={handleLogin} />
        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;
