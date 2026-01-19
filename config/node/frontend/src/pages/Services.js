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
                Przejdz do mapy
            </Button>

            <Button
                className='services__button'
                variant='contained'
                size='large'
                component={Link}
                to='/list'
            >
                Przejdz do listy uzytkownikow
            </Button>

            <Button
                className='services__button'
                variant='contained'
                size='large'
                component={Link}
                to='/newuser'
            >
                Dodaj nowego uzytkownika
            </Button>
        </div>
    );
}

export default Services;