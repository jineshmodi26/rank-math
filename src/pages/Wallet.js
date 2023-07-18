import React from 'react'
import BottomNavBar from '../components/Wallet/BottomNavBar'
import Navbar from '../components/Wallet/Navbar'
import {Box} from "@mui/material"
import Crypto from '../components/Wallet/Crypto'
import DurationTabs from '../components/Wallet/Tabs'
import Chart from '../components/Wallet/Chart'
import BuySell from '../components/Wallet/BuySell'

const Wallet = () => {

  const classes = {
    crypto : {
      display : {xl : "flex", lg : "flex", md : "flex"},
      justifyContent : {xl : "center", lg : "center", md : "center"}
    },
    bottomNav : {
      position : "fixed",
      bottom : 0,
      width : "100%"
    }
  }
  
  return (
    <>
    <Box>
        <Box><Navbar /></Box>
        <Box sx={classes.crypto}><Crypto/> </Box>
        <Box><DurationTabs /></Box>
        <Box><Chart/></Box>
        <Box><BuySell/></Box>
        <Box sx={classes.bottomNav}><BottomNavBar /></Box>
    </Box>
    </>
  )
}

export default Wallet