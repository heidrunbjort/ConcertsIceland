import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as ConcertActions } from '../reducers/concerts';
import Concert from './Concert';

class ConcertList extends React.Component {

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

