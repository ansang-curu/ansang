import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

// let user = createSlice({
//   name: "user",
//   initialState: { name: "kim", age: 20 },

//   reducers: {
//     changeName(state) {
//       state.name = "park";
//     },
//     changeAge(state, action) {
//       state.age += action.payload; //페이 로드 붙여야함
//     },
//   },
// });
// export let { changeName, changeAge } = user.actions;

let cartinpo = createSlice({
  name: "cartinpo",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addData(state) {
      state.push(action.payload);
    },
    // changeAge(state, action) {
    //   state.age += action.payload; //페이 로드 붙여야함
    // },
  },
});

export let { addCount, addData } = cartinpo.actions;

let member = createSlice({
  name: "member",
  initialState: ["안상", "병우", "기현"],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cartinpo: cartinpo.reducer,
    member: member.reducer,
  },
});
