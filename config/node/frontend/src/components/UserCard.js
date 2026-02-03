import * as React from 'react';

import Typography from '@mui/material/Typography';
import {TableCell, TableRow} from "@mui/material";


function UserCard({user}) {
    const borderStyle = {
        borderRight: '1px solid #e0e0e0'
    }
    return (
        <TableRow>
            <TableCell sx={{...borderStyle, textAlign: 'center'}}>
                <Typography variant="subtitle2">
                    {user.name}
                </Typography>
            </TableCell>
            <TableCell sx={{...borderStyle, textAlign: 'center'}}>
                {user.location}
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
                <Typography sx={{letterSpacing: 1}}>
                    {user.code}
                </Typography>
            </TableCell>

        </TableRow>
);
}

export default UserCard;
