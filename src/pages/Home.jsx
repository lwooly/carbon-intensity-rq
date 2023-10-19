import { Card, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import RegionMap from '../components/RegionMap';


const Home = () => {
   


    return (
        <div>
            <Typography variant="h3" component={'h1'} gutterBottom>
                UK Carbon Intensity
            </Typography>
            <Box sx={{ display: 'flex', gap:'20px' }} >
                <Card sx={{ height: '50vh', width: '50vh', backgroundColor: 'darkgrey' }} />
                <Box container='true'>
                    <Card sx={{ width: '50vh', backgroundColor: 'darkgrey' }}>
                        <RegionMap />
                    </Card>
                </Box>
            </Box>
        </div>
    );
};

export default Home;