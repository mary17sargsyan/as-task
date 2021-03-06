import React, {Component} from "react";
import Spiner from '../../components/Ui/Spiner/Spiner'
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import Titles from '../../components/Ui/Titles/Titles'
import styles from './Favorites.module.css'

import Largegrids from "../../components/Ui/Grids/Largegrids/Largegrids";

import Largeimg from '../../components/Ui/Image/Largeimg';

import Icons from '../../components/Ui/Image/Icons'
//import * as actions from "../../store/actions";
class Favourites extends Component {
    state = {
        loader: false,
        smt: ',',
    }

    componenDidMount() {
        
        this.props.fetchingGames();
        
    }
   
    favoritesAddingRemoving=(id, value)=>{
        console.log(id, value )
        if(id){
            this.setState({smt: id});
            this.props.favoritesAddingRemoving(id, value, this.props.favorites);
        }
    
    }



    render() {
            let show = null;
            if(this.props.loader){
                show=<Spiner/>
            }else{
                show=null;
            }
            let listFavoritesGames=[];
  

            for(let key in this.props.favorites){
             
                if(this.props.favorites[key]){
                 
                    for(let gamesList in this.props.gamesList){
                    
                        if(this.props.gamesList[gamesList].id == key){
                            listFavoritesGames.push(<Largegrids key={key}>  <Icons clicked={(id)=>this.favoritesAddingRemoving(key, this.props.favorites[key])}  active={this.props.favorites[key]}/> <Largeimg path={this.props.gamesList[gamesList].img.large} />  </Largegrids>);
                        }
                    }
                    }
                }
               

            
            return (
                <div>
                  
                  <Titles  title="Favourites"/>
                    <center>
                   <div className={styles.containerLarge}> 
                   {listFavoritesGames}
                       </div>
           
                    </center>
                </div>

            );
        }
    }

    /*haytarasars funkciayi anunov Indexjs.um kanchum enq initial stat@'*/
    const mapStateToProps = state=>{
        return{
            gamesList: state.gamesList.games,
            categories: state.gamesList.categories,
            loader: state.gamesList.loader,
            favorites: state.gamesList.favorites
        }
    };
    
    const mapDispatchToProps = dispatch => {
        return {

            fetchingGames: () => dispatch(actions.fetchingGames()),
            favoritesAddingRemoving: (id, value, favorites)=> dispatch(actions.favoritesAddingRemoving(id, value, favorites))
        };
    }
 
    export default  connect(mapStateToProps,    mapDispatchToProps) (Favourites);

