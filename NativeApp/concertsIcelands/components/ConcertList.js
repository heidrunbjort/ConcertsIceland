import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as ConcertActions } from '../reducers/concerts';
import Concert from './Concert';

class ConcertList extends React.Component {
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
    this.props.actions.getConcerts();
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
        data={this.props.concerts.concerts}
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

function mapStateToProps(state) {
  return {
    concerts: state.concerts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ConcertActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertList);

