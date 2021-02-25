import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHeroes = createAsyncThunk("heroes", async () => {
  const { data } = await axios.get(`http://localhost:5001/api/auth/api/heroAdd`);
  return data;
});


export const getHero = createAsyncThunk("hero", async ({id}) => {
  const { data } = await axios.get(`http://localhost:5001/api/heroes/hero/?id=${id}`);
  return data;
});

export const getHeroByName = createAsyncThunk("hero", async ({name}) => {
  const { data } = await axios.get(`http://localhost:5001/api/heroes/search?lastName=${name}`);
  return data;
});

export const getHistory = createAsyncThunk("history", async () => {
  const { data } = await axios.get(`http://localhost:5001/api/history`);
  return data;
});
export const getHistoryByDate = createAsyncThunk("historyBy", async ({id}) => {
  const { data } = await axios.get(`http://localhost:5001/api/history?id=${id}`);
  return data;
});
export const createNewHero = createAsyncThunk('heroUser', async (hero)=>{
  const {data} = await axios.post('http://localhost:5001/api/add',hero)
  return data
})


export const userHero = createAsyncThunk('uh',async()=>{
  const {data}= await axios.get(`http://localhost:5001/api/auth/userHero`)
  return data
})
export const userHeroImg = createAsyncThunk('lol',async()=>{
  const {data}= await axios.get(` http://localhost:5001/api/img/`)
  return data
})