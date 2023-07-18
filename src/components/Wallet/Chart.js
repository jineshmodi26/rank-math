import { Box } from '@mui/material';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2019',
        uv: 1000,
    },
    {
        name: '2020',
        uv: 2000,
    },
    {
        name: '2021',
        uv: 1800,
    },
    {
        name: '2022',
        uv: 2780,
    },
    {
        name: '2023',
        uv: 1890,
    }
];

const classes = {
    root: {
        backgroundColor: "white",
        margin: "20px",
        marginTop: "10px",
        borderRadius: "20px",
        padding: "10px",
        boxShadow: "3px 2px 10px #bdbbbb",
    },
    chart : {
        height: { xl : "230px", xs : "150px"}
    }
}

export default class Chart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

    render() {
        return (
            <Box sx={classes.root}>
                <Box sx={classes.chart}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: -30,
                                bottom: 0,
                            }}
                        >
                            <XAxis dataKey="name" style={{ fontSize: "10px" }} />
                            <YAxis style={{ fontSize: "10px", margin: 0 }} />
                            <Tooltip label="Hello" />
                            <Area type="monotone" dataKey="uv" stroke="#fa9716" fill="#fadfbb" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
        );
    }
}
