import React, {Component}from 'react';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index';
import Auxik from "../Auxik/Auxik";
import styles from './MainLayout.module.css'
import Sidebar from "../../components/Sidebar/Sidebar";

class MainLayout extends Component{
      
      
      render() {
        
            return (  <Auxik>
                <header className={styles.Header}>
                <Sidebar  />
                  </header>  
                
                  
                  <main className={styles.Main}>
                        {this.props.children}
                  </main>
                  <footer className={styles.Footer}>

                  </footer>

            </Auxik>);
      }
}


export default MainLayout;





