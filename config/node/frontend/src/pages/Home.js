import React from 'react';
import {Typography, Button, Box} from "@mui/material";
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <Box sx={{textAlign: 'center'}}>
            <Typography variant="h3" sx={{fontWeight: 'bold', mb: 1}}>
                <span style={{color: 'blue'}}>GEO</span>
                <span style={{color: 'white'}}>PORTAL</span>
                <span style={{color: 'white', fontWeight: 'normal', marginLeft: '10px'}}>Tematyczny poświęcony sieci lotnisk</span>
            </Typography>


            <Box>
                <img
                    src="/airport-icon.svg"
                    alt="Ikona lotniska"
                    style={{width: '500px', height: 'auto'}}

                />
            </Box>

            <Button className='home__button' variant='contained' size='large' component={Link} to='services'>
                START
            </Button>


        </Box>
    );
}

export default Home;