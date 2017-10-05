import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header-text" style={styles.container}>
        <h1 style={styles.text}>Concerts Iceland</h1>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#4863A0',
    marginBottom: 15,
    height: 55,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, 
    marginLeft: 20, 
    fontWeight: 'bold', 
    color:'white',
    paddingTop: 14,
    textTransform: 'uppercase'
  }
};