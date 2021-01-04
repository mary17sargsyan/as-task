import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


import asyncComponent from "./hoc/asyncComponent/asyncComponent";


import MainLayout from './hoc/MainLayout/MainLayout'



/*
const favorits = asyncComponent(()=>{
    return import("./containers/Favorits/Favorits");
});
*/
const Games = asyncComponent(()=>{
  return import('./containers/Games/Games');
});

const Favourites = asyncComponent(()=>{
  return import('./containers/Favourites/Favourites');
});


class App extends Component {
    render() {
           let routes = (
                <MainLayout >
                    <Switch >
                    <Route path="/" exact component={Games} />
                    <Route path="/favourites" component ={Favourites}/>
                  </Switch>
                </MainLayout>
            );
        
    return (
        <div>
            {routes}
        </div>

    );
  }
}
/*
        <Switch >
                    <Route path="/" exact component={Home} />
                
                </Switch>
const mapStateToProps = state =>{
    return {
        isAuthenticated: state.auth.token !==  null,
        showSideDrawer: state.layout.showSideDrawer
    }
};
const mapDispatchToProps = dispatch =>{
    return {
        onTryAutoSignup:  () =>dispatch(actions.authCheckState())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App)   );
*/
export default App;
