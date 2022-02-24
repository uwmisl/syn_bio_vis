import React, { useState, useRef } from "react"
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { runSim } from '../../actions/simulation';
// import useStyles from './Styles';

function Simulation(){
  const [simData, setSimData] = useState({
    top1: '', top2: '', base: ''
  });

  // const classes = useStyle();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Avoid refreshing automatically on submit
    dispatch(runSim(simData));
  }

  const handleClear = () => {
    // Clear user input
  }

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h6">Creating a Memory</Typography>
      <TextField
          name="Top Strand 1"
          variant="outlined"
          label="top1"
          fullWidth
          value={simData.top1}
          onChange={ (e) => setSimData({ ...simData, top1: e.target.value }) }
          />
      <TextField
          name="Top Strand 2"
          variant="outlined"
          label="top2"
          fullWidth
          value={simData.top2}
          onChange={ (e) => setSimData({ ...simData, top2: e.target.value }) }
          />
      <TextField
          name="Base Strand"
          variant="outlined"
          label="base"
          fullWidth
          value={simData.base}
          onChange={ (e) => setSimData({ ...simData, base: e.target.value }) }
          />
        <div>
          <Button variant="contained" color="primer" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={handleClear} fullWidth>Clear</Button>
        </div>
      </form>

    </Paper>
  )

}

export default Simulation