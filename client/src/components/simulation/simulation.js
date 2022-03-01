import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import Animation from './animation';
import { runSim } from '../../actions/simulation';
// import useStyles from './Styles';

function Simulation(){
  // States Hooks
  const [strandData, setStrandData] = useState({
    top1: '', top2: '', base: ''
  });

  const [simData, setSimData] = useState({
    Energy: {}, conformation: {}, time: {}
  });

  // Effect Hooks
  // Triggered when simData is updated
  useEffect(() => {
    console.log("Simulation Data Updated");
    updateAnimation();
  }, [simData])

  // const classes = useStyle();
  const dispatch = useDispatch();

  // Callabck triggered by submit button
  const handleSubmit = (e) => {
    e.preventDefault(); // Avoid refreshing automatically on submit
    dispatch(runSim(strandData, setSimData));
  }

  // Callback triggered by clear button
  const handleClear = () => {
    setStrandData({ top1: '', top2: '', base: '' })
  }

  // Function to draw the simulation
  const updateAnimation= () => {
    console.log(simData)
  }

  // The Actual compoenent
  return (
    <div>
      <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Run a simulation</Typography>
          <TextField
            name="top1"
            variant="outlined"
            label="Top Strand 1"
            fullWidth
            value={strandData.top1}
            onChange={ (e) => setStrandData({ ...strandData, top1: e.target.value }) }
            />
          <TextField
            name="top2"
            variant="outlined"
            label="Top Strand 2"
            fullWidth
            value={strandData.top2}
            onChange={ (e) => setStrandData({ ...strandData, top2: e.target.value }) }
            />
          <TextField
            name="base"
            variant="outlined"
            label="Base Strand"
            fullWidth
            value={strandData.base}
            onChange={ (e) => setStrandData({ ...strandData, base: e.target.value }) }
            />
          <div>
            <Button variant="contained" color="primer" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={handleClear} fullWidth>Clear</Button>
          </div>
        </form>
      </Paper>
      <Animation data={simData} />
    </div>

  )

}

export default Simulation
