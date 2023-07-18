import React, {useState} from 'react';
import { Box } from '@mui/material';

export default function DurationTabs() {

  const [selected, setSelected] = useState(1)

  const classes = {
    root : {
      display : "flex",
      alignItems : "center",
      justifyContent : "space-evenly"
    },
    tabs : {
      color : "#babab8",
      fontWeight : "bold",
      fontSize : "12px",
      padding : "5px",
      paddingRight : "10px",
      paddingLeft : "10px",
    },
    selectedTab : {
      color : "white",
      backgroundColor : "#babab8",
      fontSize : "12px",
      padding : "5px",
      paddingRight : "10px",
      paddingLeft : "10px",
      fontWeight : "bold",
      borderRadius : "20px"
    }
  }

  return (
    <>
    <Box sx={classes.root}>
      <Box sx={selected === 1 ? classes.selectedTab : classes.tabs} onClick={() => setSelected(1)}>Day</Box>
      <Box sx={selected === 2 ? classes.selectedTab : classes.tabs} onClick={() => setSelected(2)}>Week</Box>
      <Box sx={selected === 3 ? classes.selectedTab : classes.tabs} onClick={() => setSelected(3)}>Month</Box>
      <Box sx={selected === 4 ? classes.selectedTab : classes.tabs} onClick={() => setSelected(4)}>Year</Box>
    </Box>
    </>
  );
}