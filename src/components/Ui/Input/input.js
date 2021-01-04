import React from 'react';
import styles from './Input.module.css';

const input=(props)=>{
    let inputElement = null;
   
    switch (props.elementType) {
        case('input'):
            inputElement = <input
                
                onChange={props.changed}
                className={styles.Input}
                {...props.elementConfig}
                value={props.value}/>;
            break;

    }

    return(
        <center>

            {inputElement}
        </center>
    );


};
export default input;