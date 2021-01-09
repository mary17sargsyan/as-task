import React  from 'react';
import {Img} from 'react-image'
import styles from './img.module.css';
const Smallimg = (props)=>{
      let path='assets/'+props.path;
      let err='assets/placeholder/small/placeholder.jpg';
     return(<Img className={styles.Small}
      src={[path, err]}
      />)   
}

 


export default Smallimg;