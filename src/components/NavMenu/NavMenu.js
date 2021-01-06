import React, { Component } from 'react'
import Navitem from './Navitem/Navitem'
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import '../../styles/semanticMenu.css'
 class NavMenu extends Component {
  state = {
    path: null,
    activeItem: 'Home'
  }

  componentDidMount() {
            this.props.fetchingGames();
            this.setState({ activeItem:  window.location.pathname })
  }
  handleItemClick  (e) {

    this.setState({ activeItem: e })
  } 
  render() {
   
    const { activeItem } = this.state
    let categories=[];
   

  for(let key in this.props.categories){
    console.log(this.props.categories[key])
     let item=(
      <Navitem
      key={this.props.categories[key].nameKey}
      name={this.props.categories[key].nameKey}
      activeItem={activeItem}
      clicked={ (th) => this.handleItemClick(this.props.categories[key].nameKey)}
      to={this.props.categories[key].nameKey}
 
  />
  
     )
     categories.push(item)
  }


    
  
  

    
    return (
     <>
     {categories}
      <Navitem
          name='Favourites'
          activeItem={activeItem}
          clicked={() => this.handleItemClick('/favourites')}
          to="/favourites"         
/>
     </>
      
      
      
    )
  }
}
const mapStateToProps = state =>{
  return {
      categories: state.gamesList.categories,     
  }
};
const mapDispatchToProps = dispatch => {
  return {
 
      fetchingGames: () => dispatch(actions.fetchingGames()),
     


  };
}
export default  connect(mapStateToProps, mapDispatchToProps)( NavMenu);