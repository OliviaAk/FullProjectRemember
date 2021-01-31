const { createAction } = require("@reduxjs/toolkit");


export const setDay = createAction('SET_DAY')
export const setHero = createAction('SET_HERO')
export const showCurrentHero = createAction('SHOW_HERO')