import React, { Component } from 'react';
import Header from './components/Header';
import ConcertList from './components/ConcertList';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = {
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

const stylesUI = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  	const classes = props.classes;
  	return (
	    <div className={classes.root}>
	    	<Header/>
		    <Grid container spacing={24}>
		        <Grid item xs={12}>
		          <Paper className={classes.paper}>		    	
		          	<ConcertList style={styles.container}/>
				  </Paper>
		        </Grid>
		    </Grid>
	    </div>
    );
}

export default withStyles(stylesUI)(CenteredGrid);