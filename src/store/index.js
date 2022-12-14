
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import thunk from "redux-thunk";

// REDUCERS

import favoriteMoviesReducer from "./modules/favorite-movies/reducer";
import createUserReducer from "./modules/create-account/reducer";
import loginReducer from "./modules/login/reducer";
import moviesReducer from './modules/movies/reducer'

const reducers = combineReducers({
  favorite_movies: favoriteMoviesReducer,
  create_user: createUserReducer,
  login: loginReducer,
  movies: moviesReducer,
});

const store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default store;