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
        
       for(let key in gamesList){

            if(gamesList[key].top===true){
                largeArr.push(gamesList[key])
            }else if(gamesList[key].top===false){
               smallArr.push(gamesList[key])
            }
           
        }
        
        let large =largeArr.map((item)=>( <Largegrids key={item.id}>  <Icons clicked={()=>this.addFavorites(item.id, true)} active={true} /> <Largeimg  top={item.top} path={item.img.large}  />  </Largegrids>) )
        let small=smallArr.map((item)=>(<Smallgrids key={item.id}>  <Icons clicked={()=>this.addFavorites(item.id, true)}active={false} />  <Smallimg  top={item.top} path={item.img.small}  />     </Smallgrids>))




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
                       {large}
                        </div >
                        <div  className={styles.containerSmall}>
                        {small}
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
            loader: state.gamesList.loader,
        }
    };
    
    const mapDispatchToProps = dispatch => {
        return {
       
            fetchingGames: () => dispatch(actions.fetchingGames()),
           
    
    
        };
    }
 
    export default  connect(mapStateToProps,    mapDispatchToProps) (Games);

