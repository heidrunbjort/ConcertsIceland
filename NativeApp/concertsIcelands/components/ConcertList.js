import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Concert from './Concert';

export default class ConcertList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      concerts: [
        {
          "titill": "Leila Josefowicz - Kammertónleikar",
          "location": "Sinfóníuhljómsveit Íslands",
          "date": "3. október 2017",
          "linkInfo": "https://www.tix.is/is/event/4290/leila-josefowicz-kammertonleikar/",
          "linkBuy": "https://www.tix.is/is/buyingflow/tickets/4290/",
          "image": "https://cdn.tix.is/tix/EventImages/Feature_4290.jpg?cache=636314892929530000"
       }
      ]
    }
  }

  componentDidMount() {
    fetch('http://192.168.1.73:3002/tix')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          concerts: responseJson
        });        
        /*let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });*/
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _keyExtractor = (item, index) => index;

  _renderConcert = ({item}) => (
    <Concert
      concert={item}
    />
  )

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.concerts}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderConcert}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
});
