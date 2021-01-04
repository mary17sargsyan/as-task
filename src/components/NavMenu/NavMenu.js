import React, { Component } from 'react'
import Navitem from './Navitem/Navitem'
import { Menu } from 'semantic-ui-react'
import '../../styles/semanticMenu.css'
 class NavMenu extends Component {
  state = {
    activeItem: 'Home'
  }

  componentDidMount() {
    this.setState({ activeItem:  window.location.pathname })
  }
  handleItemClick  (e) {

    this.setState({ activeItem: e })
  } 
  render() {
    const { activeItem } = this.state
    
    return (
     <>
  <Navitem
        
        name='Home'
        activeItem={activeItem}
        clicked={() => this.handleItemClick('/')}
        to="/"
        
    />
      
   
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

export default NavMenu;