import React, {Component}from 'react';
import * as actions from '../../store/actions/index';
import NavMenu from "../NavMenu/NavMenu";
import {changedValueHandler} from '../../hoc/shared/multiplyFunction'
import {connect} from "react-redux";
import Input from '../Ui/Input/input'
import styles from './Sidebar.module.css'
class Sidebar extends Component{
 state={
    
    config: {
        search: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Search'
            },
        
            value: ''
           
        }
    }
 }

 changedElements=(event, id)=>{

    const updateControl = changedValueHandler(this.state.config, id, event)
    this.setState({config: updateControl});
    this.props.searchByTitle(event.target.value, this.props.gamesFullList)
}
 render(){

    let formElementsArray=[];
    for(let key in this.state.config){
        formElementsArray.push({id: key, config: this.state.config[key]});
        
    }

    let form = formElementsArray.map((formElement,index)=>(
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event)=>this.changedElements(event,formElement.id)}
           
            />
        )
    );
     return(
        <nav className={styles.Sidebar}>
            <form className={styles.SearchForm}>
            {form}

            </form>
    
      <NavMenu />

          
           
         
        </nav>
     )

 }

};


const mapStateToProps = state=>{
    return{
        gamesFullList: state.gamesList.gamesFullList,
    }
};

const mapDispatchToProps = dispatch => {
    return {

        fetchingGames: () => dispatch(actions.fetchingGames()),
        searchByTitle: (value, gamesFullList)=> dispatch(actions.searchBy(value,gamesFullList))
    };
}

export default  connect(mapStateToProps,    mapDispatchToProps) (Sidebar);

