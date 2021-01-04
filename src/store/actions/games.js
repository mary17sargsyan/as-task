import * as actionTypes from "./actionTypes";

import Axios from "axios";
/*
import {searching} from "../../shared/utility";
import {gamesSearchingSuccess} from "./vipSignals";
*/


export const signalUsersStart = () => {
    return{
        type: actionTypes.FETCH_GAMES_START,
    };
};

export const gamesSuccess = (games) => {
    return{
        type: actionTypes.FETCH_GAMES_SUCCESS,
        games: games
    };
};

export const gamesFail = (error) => {
    return{
        type: actionTypes.FETCH_GAMES_FAIL,
        //error: error,
    };
};





export const fetchingGames =() => {
    return dispatch => {
        dispatch(gamesStart());
        Axios({
            method: "POST",
            url: "../../../public/data/gamesList.json",
        }).then(res => {
            if (res.data) {
                /* fetcharats xaxari cucak@ */
                dispatch(gamesSuccess());
            }

        })
            .catch(err => {
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