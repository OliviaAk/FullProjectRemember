import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getHero = createAsyncThunk("hero", async ({id}) => {
  const { data } = await axios.get(`http://localhost:5001/api/heroes/hero/?id=${id}`);
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
  const {data} = await axios.post('http://localhost:5000/add',hero)
  return data
})

export const userHero = createAsyncThunk('heroUserGet',async()=>{
  const {data}= await axios.get(`http://localhost:5000/add`)
  return data
})

export const setPublishCards = createAsyncThunk("publish", async ({ id, isShow }) => {
  const { data } = await axios.patch(`http://localhost:5000/add/${id}`, { isShow });
  return data;
});

export const deleteCard = createAsyncThunk("delete", async ( {id} ) => {
  const { data } = await axios.delete(`http://localhost:5000/add/${id}`);
  return data;
});