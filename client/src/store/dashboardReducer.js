import { createReducer } from "@reduxjs/toolkit";
import { getHeroes, getHero,getHeroByName, getHistory, getHistoryByDate, createNewHero ,uploadImg, userHero , userHeroImg} from "./thunks";
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
  img: [],
  users:[],
  userCard:null,
  userImg: [],
};
const dashboardHero = createReducer(initialState, {
  [getHeroes.fulfilled]: (state, { payload }) => {
    state.heroes = payload;
  },
  [userHero.fulfilled]: (state, { payload }) => {
    state.users = payload;
  },
  [createNewHero.fulfilled]: (state, { payload }) => {
    state.newHero = payload;
  },
  [userHeroImg.fulfilled]: (state, { payload }) => {
    state.userImg = payload;
  },
  [setHero.type]: (state,{payload})=>{
    state.current = payload;
  },
  [showCurrentHero.type]: (state,{payload})=>{
    state.userCard = payload;
  },
  [getHeroByName.fulfilled]: (state,{payload})=>{
    state.currentSearch = payload;
  },
  [setDay.type]: (state, { payload }) => {
    state.history = payload;
  },
});

export default dashboardHero;
