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
    console.log(e)
    this.props.fetchExactPath(e);
    this.setState({ activeItem: e })
  } 
  render() {
   
    const { activeItem } = this.state
    let categories=[];
   

  for(let key in this.props.categories){
     let item=(
      <Navitem
      key={this.props.categories[key].nameKey}
      name={this.props.categories[key].nameKey}
      activeItem={activeItem}
      clicked={ () => this.handleItemClick(this.props.categories[key].nameKey)}
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
          clicked={() => this.handleItemClick('/favorites')}
          to="/favorites"         
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
      fetchExactPath: (path)=> dispatch(actions.fetchExactPath(path)),


  };
}
export default  connect(mapStateToProps, mapDispatchToProps)( NavMenu);