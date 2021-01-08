import * as actionTypes from "../actions/actionTypes";

import {updateObject} from '../../hoc/shared/multiplyFunction'
const initialState ={
    favorites:{},
    games: {},
    categories: {},
    loading: false,
    exactPath: null,
    error: null,
    gamesFullList:{}
};

//gamesList
const fetchingGamesStart =(state, action)=>{
    //save-ic heto chi karoghanum arah gnal mnuma estegh
    return updateObject(state, {loading: true });
};
const fetchingGamesFail =(state, action)=>{
    return updateObject(state, {error: action.error,loading: false });

};

const fetchingGamesSuccess =(state, action)=>{
    return updateObject(state, {games: action.games, gamesFullList: action.games,  categories: action.gamesCategory,   loading: false});
};



//path


 const fetchExactPathStart = (state, action) => {
    return updateObject(state, {loading: true });
};
 const fetchExactPathFail = (state, action) => {
        return updateObject(state, {error: action.error,loading: false });
};
 const fetchExactPathSuccess = (state, action) => {
        return updateObject(state, {exactPath: action.exactPathCategorie,   loading: false});
};


//favorites
 const favoritesSuccess = (state, action) => {
     console.log(action.favorites)
        return updateObject(state, {favorites: action.favorites,   loading: false});
    };
    const favoritesStart = (state, action) => {
        return updateObject(state, {loading: true});
    };
    const favoritesFail= (state, action) => {
        return updateObject(state, {error: action.error});
    };

    //search
const searchByTitleStart = (state, action) => {
    return updateObject(state, {loading: true });
};
 const searchByTitleFail = (state, action) => {
        return updateObject(state, {error: action.error,loading: false });
};
 const searchByTitleSuccess = (state, action) => {
        return updateObject(state, {games: action.games,   loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_GAMES_SUCCESS:
            return fetchingGamesSuccess(state, action);
        case actionTypes.FETCH_GAMES_START:
            return fetchingGamesStart(state, action);
        case actionTypes.FETCH_GAMES_FAIL:
            return fetchingGamesFail(state, action);
        
        case actionTypes.FETCH_EXACT_PATH_SUCCESS:
            return fetchExactPathSuccess(state, action);
        case actionTypes.FETCH_EXACT_PATH_START:
            return fetchExactPathStart(state, action);
        case actionTypes.FETCH_EXACT_PATH_FAIL:
            return fetchExactPathFail(state, action);

        case actionTypes.FAVORITES_SUCCESS:
            return favoritesSuccess(state, action);
        case actionTypes.FAVORITES_START:
            return favoritesStart(state, action);
        case actionTypes.FAVORITES_FAIL:
            return favoritesFail(state, action);
        
        case actionTypes.SEARCH_BY_TITLE_SUCCESS:
            return searchByTitleSuccess(state, action);
        case actionTypes.SEARCH_BY_TITLE_START:
            return searchByTitleStart(state, action);
        case actionTypes.SEARCH_BY_TITLE_FAIL:
            return searchByTitleFail(state, action);
        default:
            return state;

    }
};

export default reducer;