import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div style={styles.container}>
        <span style={styles.text}>Concerts Iceland</span>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#4863A0',
    marginBottom: 15,
    height: 40,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18, 
    marginLeft: 15, 
    fontWeight: 'bold', 
    color:'white'
  }
};
