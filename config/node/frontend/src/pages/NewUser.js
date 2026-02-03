import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Container, Box, TextField, Button, Paper, Stack, Typography} from "@mui/material";


function NewUser(props) {
    const [userName, setUserName] = useState("")
    const [userLocation, setUserLocation] = useState("")
    const [userPosts, setUserPosts] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.log(userName, userLocation, userPosts)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/app/insert_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    name: userName,
                    location: userLocation,
                    code: userPosts
                })
            })
            if (response.ok) {
                setUserName("");
                setUserLocation("");
                setUserPosts("");

                setSuccessMessage("Lotnisko dodane prawidłowo");
                setTimeout(() => setSuccessMessage(""), 5000)
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>


            <Container maxWidth="md" sx={{alignItems: 'center', justifyContent: 'center' }}>
                <Paper elevation={10} sx={{p: 4, borderRadius: 3, mb: 10, textAlign: 'center'}}>

                    <Typography variant="h5">FORMULARZ DODAWANIA LOTNISK</Typography>
                </Paper>

                <Paper elevation={10} sx={{p: 4, borderRadius: 3}}>
                    <Box component="form"
                         onSubmit={handleSubmit}
                    >
                        <TextField sx={{m: 1}}
                                   variant="standard"
                                   color="info"
                                   fullWidth
                                   label="Nazwa lotniska"
                                   helperText="Wpisz nazwę lotniska (np. Lotnisko Chopina)"
                                   value={userName}
                                   onChange={(e) => setUserName(e.target.value)}
                        ></TextField>
                        <TextField sx={{m: 1}}
                                   variant="standard"
                                   color="info"
                                   fullWidth
                                   label="Nazwa miasta"
                                   helperText="Wpisz nazwę miasta (np. Warszawa)"
                                   value={userLocation}
                                   onChange={(e) => setUserLocation(e.target.value)}
                        ></TextField>
                        <TextField sx={{m: 1}}
                                   variant="standard"
                                   color="info"
                                   fullWidth
                                   label="Kod lotniska"
                                   helperText="Wpisz kod IATA lotniska (np. WAW)"
                                   value={userPosts}
                                   onChange={(e) => setUserPosts(e.target.value)}
                        ></TextField>
                        <Stack direction="row" spacing={2} sx={{mt: 2, width: '100%'}} alignItems="flex-end">
                            <Button type="submit" variant="contained">Dodaj lotnisko</Button>
                            {successMessage && (
                                <Typography variant="body2" sx={{color: 'green'}}>{successMessage}</Typography>
                            )}
                            <Box sx={{flexGrow: 1}}/>
                            <Button variant="contained" onClick={() => navigate('/services')}
                                    sx={{marginLeft: 'auto'}}>Powrót</Button>
                        </Stack>

                    </Box>
                </Paper>
            </Container>


        </div>
    );
}

export default NewUser;

