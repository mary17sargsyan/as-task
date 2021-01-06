import React  from 'react';
import {Img} from 'react-image'
import styles from './img.module.css';
const Largeimg = (props)=>{
      let path='assets/'+props.path;
      let err='assets/placeholder/large/placeholder.jpg';
     return(<Img className={styles.Large}
      src={[path, err]}
    />) 
}

 


export default Largeimg;