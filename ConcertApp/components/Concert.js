import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class Concert extends Component {
  render() {
    const {concertProp} = this.props;
      return (
        <div className="concert">
          <img src={concertProp.image}/>
          <div className="titill">{concertProp.titill}</div>
          <div className="location">{concertProp.location}</div>
          <div>{concertProp.date}</div>
          <div className="buttons">
            <a href={concertProp.linkBuy} target="_blank">
              <Button>
                Buy Tickets
              </Button>
            </a>
            <a href={concertProp.linkInfo} target="_blank">
              <Button color="primary">
                Information
              </Button>
            </a>
          </div>
        </div>
    );
  }
}