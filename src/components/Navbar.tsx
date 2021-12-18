import React, {useEffect, useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Outlet } from 'react-router-dom';
import {Drawer, DrawerHeader, AppBar} from '../styles/styles';
import { useTheme} from '@mui/material/styles';
import { Box } from '@mui/material';
import {NavLink} from '../components/NavLink';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import {Autorization} from '../components/Autorization'
import CreateIcon from '@mui/icons-material/Create';
import {Editor} from './Editor'
import Cookies from 'js-cookie';

export const Navbar =  () => {
  //стейт с авторизацией перенести в редакс
  const [openAutoState, setOpenAutoState] = useState<boolean>(false)
  const getAutorization = () => {
    setOpenAutoState(!openAutoState) 
  }
  const [openPostWinState, setOpenWinState] = useState<boolean>(false)
  const addPost = () => {
    setOpenWinState(!openPostWinState)
  }
  // стейт с авторизацией перенести в редакс

  const [autoState, setAutostate] = useState<boolean>(true)

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const cookieAuto: any = Cookies.get('Autorization')
    if(cookieAuto){
      setAutostate(false)
    }else{
      return
    }
    
  }, [openAutoState])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Twitter-app
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant={"permanent"} open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <NavLink title={'Home'} >
            <HomeIcon />
          </NavLink>
        </List>
        <Divider />
        <List>
          <NavLink title={'Profile'} disabled={autoState} >
              <PersonIcon />
          </NavLink>
          <NavLink title={'Contacts'} disabled={autoState} >
              <LocalPhoneIcon />
          </NavLink>
        </List>

        <Divider />
        <List>
        <ListItem disabled={autoState} button onClick={addPost}>
          <ListItemIcon>
          <CreateIcon />
          </ListItemIcon>
          <ListItemText >Add post</ListItemText>
        </ListItem>
        </List>

        <Divider />
        <List>
        <ListItem disabled={!autoState} button onClick={getAutorization}>
          <ListItemIcon>
          <LoginIcon />
          </ListItemIcon>
          <ListItemText >Log in</ListItemText>
        </ListItem>
        </List>

      </Drawer>
      
      <Editor openProp={openPostWinState} addPost={addPost} />

      <Autorization openProp={openAutoState} getAutorization={getAutorization}/>
      
      <Outlet />
    </Box>
  );
}