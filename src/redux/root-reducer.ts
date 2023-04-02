import { User } from "@/model";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUsers = createAction<Array<User>>('users/set')
export const setIsLoading = createAction<boolean>('isLoading/set')
export const setUserPendingDelete = createAction<User>('userPendingDelete/set')
export const sortUsersByUsername = createAction('users/sortByUsername')

const initialState = {users: [] as Array<User>, isLoading: false, userPendingDelete: {} as User}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(setUsers, (state, action) => {
      state.users = [...action.payload]
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload
    })
    .addCase(setUserPendingDelete, (state, action) => {
      state.userPendingDelete = action.payload
    })
    .addCase(sortUsersByUsername, (state) => {
      state.users.sort((userA, userB) => userA.username > userB.username ? 1 : -1)
    })
})
