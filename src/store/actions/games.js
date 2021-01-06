import * as actionTypes from "./actionTypes";

import Axios from "axios";
/*
import {searching} from "../../shared/utility";
import {gamesSearchingSuccess} from "./vipSignals";
*/


export const gamesStart = () => {
    return{
        type: actionTypes.FETCH_GAMES_START,
    };
};

export const gamesSuccess = (games) => {
    return{
        type: actionTypes.FETCH_GAMES_SUCCESS,
        games: games.games,
        gamesCategory: games.categories
    };
};

export const gamesFail = (error) => {
    return{
        type: actionTypes.FETCH_GAMES_FAIL,
        error: error
    };
};





export const fetchingGames =() => {

    return dispatch => {
        dispatch(gamesStart());
        Axios(
            "data/gamesList.json"
        ).then(res => {
                let gamesList=res.data;
               
              
                if(gamesList){
                    dispatch(gamesSuccess(gamesList));
                }else{
                    console.log('error')
                }
              
           
        })
            .catch(err => {
                console.log(err)
                dispatch(gamesFail(err));
            })


    }
};
/*
export const gameSearching=(value, object)=>{
    console.log('sdad', value, object)
    return dispatch => {
        const newObj=searching(value, object);
        dispatch(signalUsersSearchingSuccess(newObj));
    }
};
*/