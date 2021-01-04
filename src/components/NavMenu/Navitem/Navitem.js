import React from 'react';
import {NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import styles from './navitem.module.css';
const navitem =(props) =>{
  let style=null;

  if(props.activeItem===props.to){
 
      style=styles.active;
  }else{
   
    style=styles.item;
  }

  return(
   
    <NavLink
    to={props.to}  onClick={props.clicked} className={style} >  {props.name} </NavLink>
   

 
  )
  
  
  
  };
export  default navitem;