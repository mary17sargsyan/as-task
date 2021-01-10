import React  from 'react';

import styles from './img.module.css';
const Icons = (props)=>{
  let path=''


      if(props.active){
        path='assets/icons/icon-favorites-active.svg'
      }else{
        path='assets/icons/icon-favorites-noactive.svg'
      }
     return(<div className={styles.Iconsdiv} ><img onClick={props.clicked} src={path} className={styles.Icons}/> </div>) 
}

 


export default Icons;