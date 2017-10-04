import React, { Component } from 'react';

export default class Concert extends Component {
  render() {
    const {concertProp} = this.props;
      return (
        <div style={{marginBottom:30}}>
          <img src={concertProp.image} style={{flex: 1, alignSelf: 'stretch', width: '50%',}}/>
          <span style={{fontWeight: 'bold', fontSize: 16, marginTop: 5}}>{concertProp.titill}</span>
          <span>{concertProp.location}</span>
          <span>{concertProp.date}</span>
        </div>
    );
  }
}