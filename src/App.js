import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TravelList from './components/TravelList/TravelList'
import ResultList from './components/ResultList/ResultList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    margin: theme.spacing(1)
  }
}));



function App() {
  const [results, setResults] = useState([]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item lg={3}>
          <TravelList onSubmit={setResults}/>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item lg={3}>
          <ResultList items={results}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
