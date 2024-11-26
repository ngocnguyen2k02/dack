import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundImage = require('../assets/home.jpg');

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Nội dung chính */}
        <Text style={styles.greeting}>Hệ thống quản lý phòng trọ Thảo Nguyên</Text>

        {/* Hộp chứa các nút điều hướng */}
        <View style={styles.buttonBox}>
          {/* Các nút điều hướng */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Contract')}
          >
            <Text style={styles.buttonText}>Xem hợp đồng</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Invoice')}
          >
            <Text style={styles.buttonText}>Xem hoá đơn</Text>
          </TouchableOpacity>
        </View>

        {/* Chân trang */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Mọi ý kiến đóng góp vui lòng gửi về địa chỉ Email phongtrothaonguyen@gmail.com</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Đảm bảo hình nền chiếm toàn bộ không gian của View
    justifyContent: 'center', // Căn giữa các phần tử trong ImageBackground
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Căn các phần tử lên đầu màn hình
    alignItems: 'center',
    padding: 16,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    
  },
  buttonBox: {
    flexDirection: 'row', // Đặt các nút theo chiều ngang
    justifyContent: 'space-between', // Căn giữa các nút trong box
    width: '80%', // Chiều rộng của box chứa các nút
    marginTop: 20, // Khoảng cách giữa phần chào mừng và các nút
  },
  button: {
    backgroundColor: '#00BFFF', // Màu nền của nút
    paddingVertical: 12, // Padding cho chiều dọc
    paddingHorizontal: 20, // Padding cho chiều ngang
    borderRadius: 30, // Bo tròn các góc
    width: '48%', // Chiều rộng của nút, 48% để có khoảng cách giữa các nút
    alignItems: 'center', // Căn giữa chữ
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff', // Màu chữ trắng
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Chữ đậm
  },
  footer: {
    width: '100%',
    backgroundColor: '# EEE9E9',
    padding: 10,
    position: 'absolute', // Đặt chân trang ở cuối màn hình
    bottom: 0,
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    flexDirection: 'row', // Đảm bảo footer có thể chứa nội dung nhiều dòng
    flexWrap: 'wrap', // Cho phép nội dung xuống dòng nếu cần
  },
  footerText: {
    fontSize: 12,
    color: '# 8B8989',
    textAlign: 'center', // Đảm bảo chữ căn giữa
  },
});

export default HomeScreen;
