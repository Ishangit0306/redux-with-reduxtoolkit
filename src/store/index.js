import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState={counter:0,showCounter:true}
const counterSlicer=createSlice({
    name:'counter',
    initialState,
    reducers:{
    increment(state,action) {state.counter=state.counter+action.payload},
    decrement(state,action) {state.counter=state.counter-action.payload},
    toggle(state) {state.showCounter=!state.showCounter}
    }

});
const store=configureStore(
    {
    reducer:counterSlicer.reducer}
    );

export const counterAction=counterSlicer.actions

export default store;


// const counterReducer=(state=initialState,action)=>{

   
   
//     if(action.type==='INCREMENT')
//     {
//         return{
//             counter: state.counter+action.val,
//             showCounter:true
//         };

//     }
//     if(action.type==='DECREMENT')
//     {
//         return{
//             counter:state.counter-action.val,
//             showCounter:true
//         };
//     }
//     if(action.type==='TOGGLE')
//     {
//         return{
//             showCounter:!state.showCounter,
//             counter:state.counter
//         }
//     }
//     return state;


// };

// const store= redux.createStore(counterReducer);





