import React, { useEffect, useState } from 'react';
import {Alert, Box} from '@mui/material/';
import {DrawerHeader} from '../styles/styles';
import {CardComponent} from '../components/CardComponent';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchPosts } from '../app/action-creators/posts';
import { useDispatch } from 'react-redux';
import AlertTitle from '@mui/material/AlertTitle';
import {Editor} from '../components/Editor';

export const Home = () => {
  const {posts, error, loading} = useTypedSelector(state => state.posts)
  const [openEditorState, setOpenEditorState] = useState<boolean>(false)
  const [cardState, setCardState] = useState<any>({
    id: '',
    text: ''
  })
  const openEditor = () => {setOpenEditorState(!openEditorState)}
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
    }, [])
  if(loading){
    return(
      <Box component="main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 3, mt: '50px' }}>
        <Alert severity="info">
          <AlertTitle>Loading...</AlertTitle>
        </Alert>
      </Box>
    )
  }else{
    return (  
      <Box component="main" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, p: 3 }}>
        {posts.map(post => (
                <>
                  <DrawerHeader />
                  <CardComponent
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  text={post.body}
                  editor={openEditor}
                  setCard={setCardState}
                  />
                </>
        ))}
        <Editor openProp={openEditorState} addPost={openEditor} id={cardState.id} oldText={cardState.text} />
      </Box>
    );
  }
}