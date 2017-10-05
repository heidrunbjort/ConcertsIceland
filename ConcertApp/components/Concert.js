import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class Concert extends Component {
  render() {
    const {concertProp} = this.props;
      return (
        <div style={{marginBottom:30}}>
          <img src={concertProp.image} style={{flex: 1, alignSelf: 'stretch', width: '50%',}}/>
          <div style={{fontWeight: 'bold', fontSize: 22, marginTop: 5}}>{concertProp.titill}</div>
          <div style={{fontSize:18}}>{concertProp.location}</div>
          <div>{concertProp.date}</div>
          <div style={{marginTop: 10}}>
            <a href={concertProp.linkBuy} style={{textDecoration: 'none'}} target="_blank">
              <Button style={{marginRight: 10}}>
                Buy Tickets
              </Button>
            </a>
            <a href={concertProp.linkInfo} style={{textDecoration: 'none'}} target="_blank">
              <Button color="primary">
                Information
              </Button>
            </a>
          </div>
        </div>
    );
  }
}