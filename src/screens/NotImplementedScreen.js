import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function NotImplementedScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/capybara.jpg' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  image: {
    width: '80%',
    aspectRatio: 2 / 1.
  }
});