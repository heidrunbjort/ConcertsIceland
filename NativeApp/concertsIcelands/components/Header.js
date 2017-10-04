import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18, marginLeft: 15, fontWeight: 'bold', color:'white'}}>Concerts Iceland</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4863A0',
    marginBottom: 15,
    height: 40,
    justifyContent: 'center',
  },
});
