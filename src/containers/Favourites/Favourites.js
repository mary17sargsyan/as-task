import React, {Component} from "react";


import {connect} from "react-redux";
import Titles from '../../components/Ui/Titles/Titles'
//import * as actions from "../../store/actions";
class Favourites extends Component {
    state = {
        loader: false,
        games: false,

    }



    render() {
      
            return (
                <div>
                    <Titles  title="Test task for a frontend developer"/>
                    <Titles  title="Favourites"/>
                    

                </div>

            );
        }
    }



export default  Favourites;