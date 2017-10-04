import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as ConcertActions } from '../reducers/concerts';
import Concert from './Concert';

class ConcertList extends Component {

  componentDidMount() {
    this.props.actions.getConcerts();
  }

  render() {
    const {} = this.props;
    return (
      <div>
        {this.props.concerts.concerts
          .map((concert,index) => 
            <Concert key={index} concertProp={concert}/>
          )}
      </div>
    );
  }
}

  //_keyExtractor = (item, index) => index;

  /*_renderConcert = ({item}) => (
    <Concert
      concert={item}
    />
  )*/

      /*<FlatList
        style={styles.container}
        data={this.props.concerts.concerts}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderConcert}
      />*/

const styles = {
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
};

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

