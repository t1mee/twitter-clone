import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, {useState, FC, ChangeEvent} from 'react';
import { useDispatch } from 'react-redux';
import {EditorType} from '../types/types';
import {addPostAction} from '../app/action-creators/addPost'



export const Editor: FC<EditorType> = ({openProp, addPost, id, oldText}) => {
    const text: string | undefined = oldText

    const [valuePostState, setValuePostState] = useState<any>(text)

    const dispatch = useDispatch()
    const handleClose = () => {
        addPost()
        setValuePostState('')
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event
        setValuePostState(value)

    }

    const handleClick = () => {
        dispatch(addPostAction(valuePostState))
        setValuePostState('')
        addPost()
        
    }
    console.log(valuePostState)
    return (
        <Dialog open={openProp} onClose={handleClose} aria-labelledby='form-auto'> 
            <DialogTitle id='form-auto'>{id?'Edit post' : 'Add post'}</DialogTitle>
            <DialogContent>
            <TextField 
                value={valuePostState}
                sx={{ width: 500, minHeight: '200px'}}
                onChange={handleChange}
                margin='dense'
                id='post-text'
                label='Введите текст поста'
                type='text'
                fullWidth
                multiline
                rows={6}
            />  
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick}>Add</Button> 
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
      )
}