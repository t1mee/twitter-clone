import React from 'react';
import {Box} from '@mui/material/';
import Typography from '@mui/material/Typography';
import {DrawerHeader} from '../styles/styles';
import { useParams } from 'react-router-dom';



export const Post = () => {
    const {id} = useParams()
    return (

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
        POST {id}
        </Typography>
        <Typography paragraph>
            123   
        </Typography>
    </Box>

    );
}