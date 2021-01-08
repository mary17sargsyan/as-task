import * as actionTypes from "./actionTypes";

import Axios from "axios";

import {searching} from "../../hoc/shared/multiplyFunction";



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



export const fetchExactPathStart = () => {
    return{
        type: actionTypes.FETCH_EXACT_PATH_START,
    };
};
export const fetchExactPathFail = (err) => {
    return{
        type: actionTypes.FETCH_EXACT_PATH_FAIL,
        error: err
    };
};
export const fetchExactPathSuccess = (path) => {
    return{
        type: actionTypes.FETCH_EXACT_PATH_SUCCESS,
        exactPathCategorie: path
    };
};


export const favoritesStart = () => {
    return{
        type: actionTypes.FAVORITES_START,
    };
};
export const favoritesFail = (err) => {
    return{
        type: actionTypes.FAVORITES_FAIL,
        error: err
    };
};
export const favoritesSuccess = (favorites) => {

    return{
        type: actionTypes.FAVORITES_SUCCESS,
        favorites: favorites
    };
};
export const searchByTitleStart = () => {
    return{
        type: actionTypes.SEARCH_BY_TITLE_START,
    };
};
export const searchByTitleFail = (err) => {
    return{
        type: actionTypes.SEARCH_BY_TITLE_FAIL,
        error: err
    };
};
export const searchByTitleSuccess = (searchGames) => {

    return{
        type: actionTypes.SEARCH_BY_TITLE_SUCCESS,
        games: searchGames
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

export const fetchExactPath=(path)=>{
    return dispatch => {
        dispatch(fetchExactPathStart());
            if(path){
                dispatch(fetchExactPathSuccess(path))
            }else{

                let err='Somthing went wrong !'
                dispatch(fetchExactPathFail(err))
            }     
        }
}
export const favoritesAddingRemoving=(id, value, favoritesObj)=>{
 
    return dispatch => {
        dispatch(favoritesStart())
       if(id){
        let favorites=favoritesObj;

        favorites[id] = !value;
        
        dispatch(favoritesSuccess(favorites))
       } else{
           let err='Smth went wrong !'
        dispatch(favoritesFail(err))
       }
    
         


            }     
}

    
    


export const searchBy=(value, object)=>{
    return dispatch => {
        dispatch(searchByTitleStart());
        const filtered=searching(value, object);
        if(filtered){
            
            dispatch(searchByTitleSuccess(filtered));  
        }
            let err="Nothing to show"
            dispatch(searchByTitleFail(err));
        
       
    }
};
