import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/styles'; // Import file styles.js

function InvoiceScreen() {
  return (
    <View style={styles.container}>
      <Text>Thông tin hoá đơn</Text>
      {/* Thêm nội dung hoá đơn của bạn tại đây */}
    </View>
  );
}

export default InvoiceScreen;
