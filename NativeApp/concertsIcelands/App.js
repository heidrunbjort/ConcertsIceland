import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ConcertList from './components/ConcertList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
       <Header/>
       <ConcertList style={styles.container}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
