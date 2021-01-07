import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './styles/semanticGrid.css'
import * as actions from'./store/actions/index';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import MainLayout from './hoc/MainLayout/MainLayout'

const Games = asyncComponent(()=>{
  return import('./containers/Games/Games');
});

const Favorites = asyncComponent(()=>{
  return import('./containers/Favorites/Favorites');
});


class App extends Component {
    render() {
        let routesArr =[];
   

        for(let key in this.props.categories){
           let route=(
         
            <Route key={this.props.categories[key].nameKey} path={"/"+this.props.categories[key].nameKey} exact component={Games} />
           )
           routesArr.push(route)
        }
     
           let routes = (
                <MainLayout categories={this.props.categories} >
                <Switch>
                    {routesArr}
                    <Route key='/' path="/" exact component={Games} />
                    <Route key='/favorites' path="/favorites" component ={Favorites}/>
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

const mapStateToProps = state =>{
    return {
        categories: state.gamesList.categories,    
    }
};
const mapDispatchToProps = dispatch =>{
    return {
        fetchingGames: () => dispatch(actions.fetchingGames()),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App)   );


