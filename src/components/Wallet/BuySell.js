import { Box, Typography } from '@mui/material'
import React from 'react'
import Buy from "../../assets/Buy.png"
import Sell from "../../assets/Sell.png"

const BuySell = () => {

    const classes = {
        root : {
            marginTop : "10px",
            display : "flex",
            alignItem : "center",
            justifyContent : "space-evenly",
            marginBottom : { xs : "15%", xl : "0%" }
        },
        buttons : {
            backgroundColor : "white",
            padding : "15px",
            paddingRight : "35px",
            paddingLeft : "35px",
            borderRadius : "20px",
            boxShadow : "3px 2px 10px #bdbbbb"
        },
        text : {
            fontSize : "12px",
            color : "#575757",
            fontWeight : "bold"
        }
    }

  return (
    <Box sx={classes.root}>
        <Box sx={classes.buttons}>
            <Box><img src={Buy} height="40px"/></Box>
            <Box><Typography sx={classes.text}>Buy BTC</Typography></Box>
        </Box>
        <Box sx={classes.buttons}>
            <Box><img src={Sell} height="40px"/></Box>
            <Box><Typography sx={classes.text}>Sell BTC</Typography></Box>
        </Box>
    </Box>
  )
}

export default BuySell