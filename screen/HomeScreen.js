import React, { useContext } from 'react';
import { ImageBackground, Image, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../screen/UserContext'; // Thêm import này

const backgroundImage = require('../assets/home.jpg');
const logoImage = require('../assets/user.png');
function HomeScreen() {
  const navigation = useNavigation();
  const { userData, setUserData } = useContext(UserContext); // Lấy setUserData từ UserContext

  const handleLogout = () => {
    // Xóa thông tin người dùng khỏi UserContext
    setUserData({
      fullname: '',
      email: '',
      trangthaihoatdong: '',
    });

    // Chuyển hướng về màn hình đăng nhập
    navigation.replace('Login'); // Thay 'Login' bằng tên màn hình đăng nhập của bạn nếu khác

    // Alert.alert('Đăng xuất', 'Bạn đã đăng xuất thành công.');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {/* Header: Nút đăng xuất */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText1}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logoImage} />
        </View>
        <Text style={styles.welcomeText}>Chào mừng, {userData?.fullname || 'Người dùng'}!</Text>
        <Text style={styles.emailText}>Email: {userData?.email}</Text>

        <Text style={styles.greeting}>Hệ thống quản lý phòng trọ Thảo Nguyên</Text>

        {/* Navigation Buttons */}
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Contract')}>
            <Text style={styles.buttonText}>Xem hợp đồng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Invoice')}>
            <Text style={styles.buttonText}>Xem hoá đơn</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Mọi ý kiến đóng góp vui lòng gửi về địa chỉ Email phongtrothaonguyen@gmail.com
        </Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailText: {
    fontSize: 16,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#4caf50',
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10, // Tạo khoảng cách trên dưới nếu cần
  },
  logoImage: {
    width: 70, // Đặt chiều rộng theo ý muốn
    height: 70, // Đặt chiều cao theo ý muốn
    resizeMode: 'contain', // Giữ tỷ lệ hình ảnh
  },
});



export default HomeScreen;