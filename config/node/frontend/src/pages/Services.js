import React from 'react';
import {Button, Box, Typography, Container} from "@mui/material";
import {Link} from "react-router-dom";

function Services(props) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <Box sx={{width: '80%', mb: 8, backgroundColor: "white", borderRadius: 4, textAlign: 'center'}}>
                <Typography variant="h3" sx={{color: 'black', fontWeight: 'bold'}}>
                    Panel zarządzania siecią lotnisk
                </Typography>
            </Box>
            <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'center', gap: 6}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                    <Box sx={{border: '2px solid #FFFFFF', borderRadius: '30%', padding: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src="/map-icon.svg" alt="Mapa" style={{width: '320px'}}/>
                    </Box>
                    <Button
                        className='services__button'
                        variant='contained'
                        size='large'
                        component={Link}
                        to='/map'
                    >
                        Przejdz do mapy lotnisk
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                    <Box sx={{border: '2px solid #FFFFFF', borderRadius: '30%', padding: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src="/list-icon.svg" alt="Lista" style={{width: '320px'}}/>
                    </Box>
                    <Button
                        className='services__button'
                        variant='contained'
                        size='large'
                        component={Link}
                        to='/airports'
                    >
                        Przejdz do listy lotnisk
                    </Button>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
                    <Box sx={{border: '2px solid #FFFFFF', borderRadius: '30%', padding: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src="/add-icon.svg" alt="Dodaj" style={{width: '320px'}}/>
                    </Box>
                    <Button
                        className='services__button'
                        variant='contained'
                        size='large'
                        component={Link}
                        to='/new-airport'
                    >
                        Dodaj nowe lotnisko
                    </Button>
                </Box>
            </Container>
        </Box>


    );
}

export default Services;