import {createStore} from 'redux'
import {combineReducers} from 'redux'

import toggleFavorite from './Reduceres/favoriteReducer'
import toggleHistorique from './Reduceres/historiqueReduce'


 /*const reducers =combineReducers({toggleFavorite,
    toggleHistorique}
 )*/
export default createStore(toggleFavorite) 