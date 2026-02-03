import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Services(props) {
    return (<div>
            <div>Services</div>
            <Button
                className='services__button'
                variant='contained'
                size='large'
                component={Link}
                to='/map'
            >
                Przejdz do mapy lotnisk
            </Button>

            <Button
                className='services__button'
                variant='contained'
                size='large'
                component={Link}
                to='/airports'
            >
                Przejdz do listy lotnisk
            </Button>

            <Button
                className='services__button'
                variant='contained'
                size='large'
                component={Link}
                to='/new-airport'
            >
                Dodaj nowe lotnisko
            </Button>
        </div>
    );
}

export default Services;