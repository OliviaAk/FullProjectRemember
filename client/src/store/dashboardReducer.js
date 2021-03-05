import { createReducer } from "@reduxjs/toolkit";
import {  createNewHero , userHero, setPublishCards, deleteCard } from "./thunks";
import {setDay, setHero, showCurrentHero} from './actions'

export const initialState = {
  heroes: [],
  current: null,
  currentSearch : null,
  histories : [],
  history: null,
  loading: false,
  newHero:null,
  error: null,
  usersHeroes:[],
  userCard:null,
 
};
const dashboardHero = createReducer(initialState, {
  [setPublishCards.fulfilled]: (state, { payload }) => {
    const index = state.usersHeroes.findIndex((e) => e._id === payload._id);
    state.usersHeroes[index] = payload;
  },
  [deleteCard.fulfilled]: (state, { payload }) => {

    state.usersHeroes = state.usersHeroes.filter(us => us._id !== payload);

    },
  [userHero.fulfilled]: (state, { payload }) => {
    state.usersHeroes = payload;
  },
  [createNewHero.fulfilled]: (state, { payload }) => {
    state.newHero = payload;
  },
  
  [setHero.type]: (state,{payload})=>{
    state.current = payload;
  },
  [showCurrentHero.type]: (state,{payload})=>{
    state.userCard = payload;
  },
 
  [setDay.type]: (state, { payload }) => {
    state.history = payload;
  },
});

export default dashboardHero;
