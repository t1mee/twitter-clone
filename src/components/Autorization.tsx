
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, {useState, FC, ChangeEvent} from 'react';
import {AutoProps} from '../types/types';
import Cookies from 'js-cookie';



export const Autorization: FC<AutoProps> = ({openProp, getAutorization}) => {

    const [isValidEmailState, setValidEmail] = useState<boolean>(false)
    const [isValidPassState, setValidPass] = useState<boolean>(false)
    const handleClose = () => {
        getAutorization()
        setValidEmail(false)
        setValidPass(false)
    }
    interface lengthOfInputsType  {email: number; pass: number}
    const lengthOfInputs: lengthOfInputsType  = {
        email: 0,
        pass: 0
    }
    const validateEmail = (email: String) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }    
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event
        const isValid = (!value.length?false:!validateEmail(value))
        setValidEmail(isValid)
        lengthOfInputs.email = value.length
    }
    const handleChangePass =  (event: ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event
        const isValid = !(!value.length ||  value.length >= 6 ) 
        setValidPass(isValid)
    }
    const handleClick = () => {
        if(+lengthOfInputs.email > 0 || +lengthOfInputs.pass > 0){
            if(!isValidEmailState && !isValidPassState){
                Cookies.set('Autorization', 'true')
                getAutorization()
            }else{
                console.log('Поля не валидны')
            }
        }else{
            console.log('поля не могут быть пустыми')
        }
    }
    return (
        <Dialog open={openProp} onClose={handleClose} aria-labelledby='form-auto'> 
            <DialogTitle id='form-auto'>Log in</DialogTitle>
            <DialogContent>
            <TextField 
                onChange={handleChangeEmail}
                error={isValidEmailState}
                margin='dense'
                id='email'
                label={isValidEmailState?'Email is not valid': 'Email adress'}
                type='email'
                fullWidth
            />  
            <TextField 
                onChange={handleChangePass}
                error={isValidPassState}
                margin='dense'
                id='password'
                label={isValidPassState?'Password must be longer than 6 characters':'Password'}
                type='password'
                fullWidth
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick}>Log in</Button> 
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
      )
}