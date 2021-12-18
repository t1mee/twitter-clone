import React, {FC} from 'react';
import './App.css';
import {Home} from './pages/Home';
import {Contacts} from './pages/Contacts';
import {Profile} from './pages/Profile';
import {Post} from './pages/Post';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

export const  App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path='profile' element={<Profile />} />
        <Route path='post'> 
            <Route path=':id' element={<Post />} />
        </Route>
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;