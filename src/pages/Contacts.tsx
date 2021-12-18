import React, { useEffect, useState } from 'react';
import {Box} from '@mui/material/';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {UserItemList} from '../components/UserItemList'

export const Contacts = () => {
  const [userListState, setUserList] = useState<any>([])
  const getData = async () => { 
    try{
      const {data: userData} = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUserList (userData)
      console.log(userListState)
    }catch(e){
      console.log(e)
    }

  }
  useEffect(() => {
    console.log(getData())
  }, [])
  
 

  return (
    <Box component="main" sx={{mt: '50px', flexGrow: 1, p: 3 }}>
      
    <List sx={{ml: '200px', mt: '10px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {userListState.map((i: any) => (
          <UserItemList user={i} />
      ))
      }
      
    </ List>
  </Box>

  );
}