import React, {Component} from "react";

import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import styles from './Games.module.css'
import Titles from '../../components/Ui/Titles/Titles'
import Spiner from '../../components/Ui/Spiner/Spiner'
import Largegrids from "../../components/Ui/Grids/Largegrids/Largegrids";
import Smallgrids from "../../components/Ui/Grids/Smallgrids/Smallgrids";
import Largeimg from '../../components/Ui/Image/Largeimg';
import Smallimg from '../../components/Ui/Image/Smallimg';
import Icons from '../../components/Ui/Image/Icons'


class Games extends Component {
    state = {
        loader: false,
        smt: ',',
        gamesList:{}
    }

    componenWillMount() {
        
        this.props.fetchingGames();

    }
   
    favoritesAddingRemoving=(id, value)=>{
        if(id){
            this.setState({smt: id});
            this.props.favoritesAddingRemoving(id, value, this.props.favorites);
        }
    
    }

    render() {
      
        let largeArr=[];
        let smallArr=[];
        for(let byCategories in this.props.categories){
           if(this.props.categories[byCategories].nameKey===this.props.path){
              let gamesByCategories = this.props.categories[byCategories].games;
              gamesByCategories.map((game)=>{
                  for(let key in this.props.gamesList){
                    
                      if(this.props.gamesList[key].id===game.id){
                          let icn=  <Icons clicked={(id)=>this.favoritesAddingRemoving(game.id, this.props.favorites[game.id])} top={game.top}  active={this.props.favorites[game.id]} />
                        
                        if(game.top){
                            largeArr.push(<Largegrids key={game.id} > 
                                 {icn}
                                 <Largeimg   path={this.props.gamesList[key].img.large}  />   </Largegrids>)
                        } 
                        if(!game.top){
                           smallArr.push(<Smallgrids key={game.id}>  
                                {icn}
                            <Smallimg   path={this.props.gamesList[key].img.small}  />  </Smallgrids>);
                        }
                      }
                  }
              })
                
           }
        };

        let show=null;
        let err=null;
        if(this.props.error){
            err=this.props.err
        }
        if(this.props.loader){
            show=<Spiner/>
        }else{
            show=null;
        }

            return (
                <div>
                    <Titles  title="Test task for a frontend developer"/>
            <center>
                    <div className={styles.container}>

                    <div  className={styles.containerLarge}>
                      {largeArr}
                        </div >
                        <div  className={styles.containerSmall}>
                        {smallArr}
                        </div >

                        </div>
                    </center>
    
                    {show}
                    {err}
             
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
            path: state.gamesList.exactPath,
            err: state.gamesList.error,
            favorites: state.gamesList.favorites
        }
    };
    
    const mapDispatchToProps = dispatch => {
        return {

            fetchingGames: () => dispatch(actions.fetchingGames()),
            favoritesAddingRemoving: (id, value, favorites)=> dispatch(actions.favoritesAddingRemoving(id, value, favorites))
        };
    }
 
    export default  connect(mapStateToProps,    mapDispatchToProps) (Games);

