import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Concerts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    marginTop: 30,
    marginBottom: 15,
    //alignItems: 'flex-start',
    height: 30,
    justifyContent: 'center',
  },
});
