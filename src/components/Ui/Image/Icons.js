import React  from 'react';
import {Img} from 'react-image'
import styles from './img.module.css';
const Icons = (props)=>{
  let path=null;

  props.active?path='assets/icons/icon-favorites-active.svg':path='assets/icons/icon-favorites-noactive.svg'
     return(<div className={styles.Iconsdiv} ><Img onClick={props.clicked} className={styles.Icons}
      src={path}
    /> </div>) 
}

 


export default Icons;