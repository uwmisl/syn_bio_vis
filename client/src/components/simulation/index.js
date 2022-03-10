import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import SDSimulation from '../d3/strandDisplacement'
import { runSim } from '../../actions/simulation';
// import useStyles from './Styles';

const data = {
  "conformation": [
    "......((((+))))((((((+))))))",
    "......((((+)))).((((.+.)))).",
    "......((((+)))).((((.+.)))).",
    "......(((.+.)))..(((.+.)))..",
    "......(((.+.))).(((((+))))).",
    ".....(((((+)))))(((((+))))).",
    "........((+))..((((((+))))))",
    ".....(((((+)))))(((((+))))).",
    ".....(((((+)))))(((((+))))).",
  ],
  "energy": [
    9.999572362025956,
    9.879572362025955,
    9.879572362025955,
    13.079572362025953,
    9.499572362025955,
    9.329572362025957,
    10.709572362025956,
    9.329572362025957,
    9.329572362025957,
  ],
  "time": [
    0.0,
    1.3777287513428606e-07,
    2.5293141122227776e-07,
    3.649222387798077e-07,
    4.919134460906206e-07,
    6.137006777284282e-07,
    7.361303622589032e-07,
    8.75441668140903e-07,
    9.820459612694137e-07,
  ]
}

// const data = [
//   { year: 1980, efficiency: 24.3, sales: 8949000 },
//   { year: 1985, efficiency: 27.6, sales: 10979000 },
//   { year: 1990, efficiency: 28, sales: 9303000 },
//   { year: 1991, efficiency: 28.4, sales: 8185000 },
//   { year: 1992, efficiency: 27.9, sales: 8213000 },
//   { year: 1993, efficiency: 28.4, sales: 8518000 },
//   { year: 1994, efficiency: 28.3, sales: 8991000 },
//   { year: 1995, efficiency: 28.6, sales: 8620000 },
//   { year: 1996, efficiency: 28.5, sales: 8479000 },
//   { year: 1997, efficiency: 28.7, sales: 8217000 },
//   { year: 1998, efficiency: 28.8, sales: 8085000 },
//   { year: 1999, efficiency: 28.3, sales: 8638000 },
//   { year: 2000, efficiency: 28.5, sales: 8778000 },
//   { year: 2001, efficiency: 28.8, sales: 8352000 },
//   { year: 2002, efficiency: 29, sales: 8042000 },
//   { year: 2003, efficiency: 29.5, sales: 7556000 },
//   { year: 2004, efficiency: 29.5, sales: 7483000 },
//   { year: 2005, efficiency: 30.3, sales: 7660000 },
//   { year: 2006, efficiency: 30.1, sales: 7762000 },
//   { year: 2007, efficiency: 31.2, sales: 7562000 },
//   { year: 2008, efficiency: 31.5, sales: 6769000 },
//   { year: 2009, efficiency: 32.9, sales: 5402000 },
//   { year: 2010, efficiency: 33.9, sales: 5636000 },
//   { year: 2011, efficiency: 33.1, sales: 6093000 },
//   { year: 2012, efficiency: 35.3, sales: 7245000 },
//   { year: 2013, efficiency: 36.4, sales: 7586000 },
//   { year: 2014, efficiency: 36.5, sales: 7708000 },
//   { year: 2015, efficiency: 37.2, sales: 7517000 },
//   { year: 2016, efficiency: 37.7, sales: 6873000 },
//   { year: 2017, efficiency: 39.4, sales: 6081000 },
// ];


function Simulation() {
  // ################
  // STATE HOOKS
  // ################

  // Strand data input by the user
  const [strandData, setStrandData] = useState({
    top1: '', top2: '', base: ''
  });

  // Simulation data generated by server
  const [simData, setSimData] = useState({
    conformation: {}, energy: {}, time: {}
  });

  // ################
  // Effect Hook
  // ################

  // Triggered when simData is updated
  // useEffect(() => {
  //   console.log("Simulation Data Updated");
  //   console.log(simData)
  // }, [simData])

  // ####################
  // dispatch Hook
  // ####################

  // const classes = useStyle();
  const dispatch = useDispatch();

  // ####################
  // Local Functions
  // ####################

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
  // const updateAnimation = () => {
  //   console.log(simData)
  // }

  // ####################
  // The Actual compoenent
  // ####################
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
            onChange={(e) => setStrandData({ ...strandData, top1: e.target.value })}
          />
          <TextField
            name="top2"
            variant="outlined"
            label="Top Strand 2"
            fullWidth
            value={strandData.top2}
            onChange={(e) => setStrandData({ ...strandData, top2: e.target.value })}
          />
          <TextField
            name="base"
            variant="outlined"
            label="Base Strand"
            fullWidth
            value={strandData.base}
            onChange={(e) => setStrandData({ ...strandData, base: e.target.value })}
          />
          <div>
            <Button variant="contained" color="primer" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={handleClear} fullWidth>Clear</Button>
          </div>
        </form>
      </Paper>
      {/* Simulation will be drawn automatically when simData is updated*/}
      <SDSimulation data={data} />
    </div>

  )

}

export default Simulation
