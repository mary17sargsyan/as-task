import * as actionTypes from "../actions/actionTypes";

import {updateObject} from '../../hoc/shared/multiplyFunction'
const initialState ={
    games: [],
    loading: false,
};
const fetchingGamesStart =(state, action)=>{
    //save-ic heto chi karoghanum arah gnal mnuma estegh
    return updateObject(...state, {loading: true });
};
const fetchingGamesFail =(state, action)=>{
    return updateObject(...state, {error: action.error, loading: false });

};

const fetchingGamesSuccess =(state, action)=>{
    return updateObject(...state, {games: action.games,  loading: false});
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GAMES_SUCCESS:
            return fetchingGamesSuccess(state, action);
        case actionTypes.FETCH_GAMES_START:
            return fetchingGamesStart(state, action);
        case actionTypes.FETCH_GAMES_FAIL:
            return fetchingGamesFail(state, action);
        default:
            return state;

    }
};

export default reducer;