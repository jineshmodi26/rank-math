import { Badge, Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import BitcoinImg from "../../assets/Bitcoin.jpg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Crypto = () => {

    const [open, setOpen] = useState(false);

    const classes = {
        root: {
            backgroundColor: "white",
            margin : "20px",
            width : {xl : "20%", lg : "40%", md : "30%"},
            marginTop: "20px",
            marginBottom : "10px",
            borderRadius: "20px",
            padding: "10px",
            boxShadow : "3px 2px 10px #bdbbbb"
        },
        mainBox: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        innerBox1: {
            display: "flex",
            alignItems: "center"
        },
        innerBox2: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        buttons : {
            color : "#c7c7c7",
            display: "inline-block"
        },
        bitcoinText : {
            fontSize: "14px",
            color: "#575757"
        },
        btcText : { 
            fontSize: "14px",
            marginRight: "10px", 
            color: "#babab8"
        },
        btcPrice : {
            fontSize: "20px",
            color: "#575757",
            fontWeight: "bold",
            paddingLeft: "15px",
            textAlign: "left"
        },
        usdPrice : { 
            color: "#babab8",
            fontSize: "16px",
            paddingLeft: "15px",
            fontWeight: "bold" 
        },
        discount : { 
            fontSize: "12px",
            color: "white",
            marginRight: "10px",
            backgroundColor: "#f5316f",
            padding: "3px",
            paddingRight: "8px",
            paddingLeft: "8px",
            borderRadius: "20px" 
        }
    }

    return (
        <Box sx={classes.root}>
            <Box sx={classes.mainBox}>
                <Box sx={classes.innerBox1}>
                    <Box>
                        <img src={BitcoinImg} height="60px" />
                    </Box>
                    <Box>
                        <Typography sx={classes.bitcoinText}>Bitcoin</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={classes.btcText}>BTC</Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={classes.btcPrice}>3.529020 BTC</Typography>
            </Box>
            <Box sx={classes.innerBox2}>
                <Box>
                    <Typography sx={classes.usdPrice}>$19.153 USD</Typography>
                </Box>
                <Box>
                    <Typography sx={classes.discount}>-2.32%</Typography>
                </Box>
            </Box>
            <Box>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="back-appbar"
                aria-haspopup="true"
                sx={classes.buttons}
                onClick={() => setOpen(!open)}
                >
                    <span
                        style={{
                            transition: "transform 200ms linear",
                            transform: `rotateZ(${open ? 0 : "180deg"})`,
                            display: "inline-block",
                        }}
                    >
                        <ExpandLessIcon/>
                    </span>
                </IconButton>
                {
                    open ? <Box sx={{display : "flex", justifyContent : "space-around"}}>
                        <Box><Button variant='contained' sx={{borderRadius : "20px"}}>Buy</Button></Box>
                        <Box><Button variant='contained' color="error" sx={{borderRadius : "20px"}}>Sell</Button></Box>                        
                    </Box> : null
                 }
            </Box>
        </Box>
    )
}

export default Crypto