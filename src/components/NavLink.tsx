import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, {ReactChild, ReactChildren } from "react";
import { Link } from "react-router-dom";
interface NavProps { 
    title: string;
    children: ReactChild | ReactChildren;
    disabled?: boolean;

  }
export const NavLink= ({title, disabled, children}: NavProps) => {
    const path = (title === 'Home'?'/':title.toLowerCase())
    if(disabled){
          return(
              <ListItem className='nav-link' button disabled={disabled} >
                <ListItemIcon>
                  {children}
                </ListItemIcon>
                <ListItemText >{title}</ListItemText>
              </ListItem>
    )
    }else{
      return(
        <Link className='nav-link' to={path}>
            <ListItem button  >
              <ListItemIcon>
                {children}
              </ListItemIcon>
              <ListItemText >{title}</ListItemText>
            </ListItem>
        </Link>
  )
    }

}