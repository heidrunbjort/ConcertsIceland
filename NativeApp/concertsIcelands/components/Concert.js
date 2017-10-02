import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 /16);
const imageWidth = dimensions.width;

export default class Concert extends Component {
  render() {
    const {concert} = this.props;
      return (
        <View>
          <Image source={{uri: concert.image}} style={{flex: 1, alignSelf: 'stretch', width: imageWidth, height: imageHeight}}/>
          <Text>{concert.titill}</Text>
          <Text>{concert.location}</Text>
          <Text>{concert.date}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
