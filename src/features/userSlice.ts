//o createSlice cria um reducer (atualiza os estados) e as ações
import {createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/types";



//estado inicial do usuário
export interface UserState{
    user:User | null;
}

//define o estado incial, ou seja, nenhum usuario logado
const initialState: UserState={
    user:null,
};

export const userSlice = createSlice({
    name: "user",//identifica
    initialState,//estado inicial que foi definido por nos
    reducers:{
        registerUser: (state, action: PayloadAction <User>)=>{
            state.user= action.payload; //aaqui vai salvar o user
        },

        logoutUser: (state)=>{
            state.user =null;
        },
    },
}) ;

export const {registerUser, logoutUser}= userSlice.actions;
export default userSlice.reducer;