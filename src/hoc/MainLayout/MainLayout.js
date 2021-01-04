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
                <Sidebar
                  />
                  </header>  
                
                  
                  <main className={styles.Main}>
                        {this.props.children}
                  </main>
                  <footer className={styles.Footer}>

                  </footer>

            </Auxik>);
      }
}
/*
const mapStateToProps = state => {
      return {
            showSideDrawer: state.layout.showSideDrawer,
            isAuth: state.auth.token,
            isAuthenticated: state.auth.token !== null
      };
};

const mapDispatchToProps = dispatch => {
      return {
            showSideDrawerFunc: (showSideDrawer) => dispatch(actions.showSideDrawer(showSideDrawer))
      };
};



export default connect(mapStateToProps, mapDispatchToProps)(Layout);
*/

export default MainLayout;




