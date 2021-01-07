import * as actionTypes from "../actions/actionTypes";

import {updateObject} from '../../hoc/shared/multiplyFunction'
const initialState ={
    favorites:[],
    games: {},
    categories: {},
    loading: false,
    exactPath: null,
    error: null
};
const fetchingGamesStart =(state, action)=>{
    //save-ic heto chi karoghanum arah gnal mnuma estegh
    return updateObject(state, {loading: true });
};
const fetchingGamesFail =(state, action)=>{
    return updateObject(state, {error: action.error,loading: false });

};

const fetchingGamesSuccess =(state, action)=>{
    return updateObject(state, {games: action.games,  categories: action.gamesCategory,   loading: false});
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


 const favoritesSuccess = (state, action) => {
        return updateObject(state, {favorites: action.favorites,   loading: false});
    };
    const favoritesStart = (state, action) => {
        return updateObject(state, {loading: true});
    };
    const favoritesStart = (state, action) => {
        return updateObject(state, {error: action.error});
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

        case actionTypes.FFAVORITES_SUCCESS:
            return favoritesSuccess(state, action);
        case actionTypes.FAVORITES_START:
            return ffavoritesStart(state, action);
        case actionTypes.FAVORITES_FAIL:
            return favoritesFail(state, action);
    
        default:
            return state;

    }
};

export default reducer;