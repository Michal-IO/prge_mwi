import React, {useEffect, useState} from 'react';
import UserCard from "../components/UserCard";
import {
    Box,
    Button,
    Container,
    Paper, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import FlightIcon from '@mui/icons-material/Flight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TagIcon from '@mui/icons-material/Tag';
import {useNavigate} from "react-router-dom";

function ListOfItems(props) {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch('http://localhost:10000/app/get_users')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setUsers(res)
            })


    }, [])


    return (
        <Container maxWidth="lg" sx={{mt: 4}}>
            <Stack direction="row" sx={{mb: 2, width: '100%'}} alignItems="center">
                <Typography variant="h5" sx={{fontWeight: 'bold', color: 'white'}}>
                    Lista Dodanych Lotnisk
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <Button variant="contained" onClick={() => navigate('/services')}
                        sx={{backgroundColor: 'white', color: 'blue', marginLeft: 'auto'}}>Powrót</Button>
            </Stack>

            <Paper sx={{width: '100%', overflow: 'hidden', borderRadius: 4, boxShadow: 5}}>
                <TableContainer sx={{maxHeight: 600}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{textAlign: 'center', backgroundColor: '#f5f5f5'}}>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                        <FlightIcon color="primary"/>
                                        <Typography>Nazwa Lotniska</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{textAlign: 'center', backgroundColor: '#f5f5f5'}}>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                        <LocationOnIcon color="primary"/>
                                        <Typography>Miasto</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{textAlign: 'center', backgroundColor: '#f5f5f5'}}>
                                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                                        <TagIcon color="primary"/>
                                        <Typography>Kod IATA</Typography>
                                    </Stack>
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.data?.map(user => (
                                <UserCard key={user.code} user={user}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    )
        ;
}

export default ListOfItems;
