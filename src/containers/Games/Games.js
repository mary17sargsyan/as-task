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
import { Grid } from "semantic-ui-react";

//import * as actions from "../../store/actions";
class Games extends Component {
    state = {
        loader: false,
        games: {},

    }

    componentWillMount() {
        this.props.fetchingGames();
        this.setState({games: this.props.gamesList})
        


    }
    addFavorites=(id, active)=>{
        console.log(id, active)
    }

    render() {
        let gamesList=this.state.games;
        
        let largeArr=[];
        let smallArr=[];
  
        for(let byCategories in this.props.categories){
           if(this.props.categories[byCategories].nameKey===this.props.path){
              let gamesByCategories = this.props.categories[byCategories].games;
              gamesByCategories.map((game)=>{
                  for(let key in this.props.gamesList){
                      if(this.props.gamesList[key].id===game.id){
                        if(game.top){
                            largeArr.push(<Largegrids key={game.id}>  <Icons clicked={(id)=>this.addFavorites(game.id)} active={true} /> <Largeimg   path={this.props.gamesList[key].img.large}  />  </Largegrids>)
                        }else {
                           smallArr.push(<Smallgrids key={game.id}>  <Icons clicked={(id)=>this.addFavorites(game.id)} active={true} /> <Smallimg   path={this.props.gamesList[key].img.small}  />  </Smallgrids>);
                        }
                      }
                  }
              })
                
           }
        };

        let show=null;
      
        if(this.props.loader){
            show=<Spiner/>
        }else{
            show=null;
        }

            return (
                <div>
                    <Titles  title="Test task for a frontend developer"/>
                    {show}
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
            path: state.gamesList.exactPath
        }
    };
    
    const mapDispatchToProps = dispatch => {
        return {
       
            fetchingGames: () => dispatch(actions.fetchingGames()),
           
    
    
        };
    }
 
    export default  connect(mapStateToProps,    mapDispatchToProps) (Games);

