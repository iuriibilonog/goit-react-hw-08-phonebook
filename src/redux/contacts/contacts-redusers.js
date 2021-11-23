import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./contacts-type";
import {
  getContactRequest,
  getContactSuccsess,
  getContactError,
  addContactRequest,
  addContactSuccsess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContactError,
} from "./contacts-actions";

const items = createReducer([], {
  [getContactSuccsess]: (_, action) => [...action.payload],
  [addContactSuccsess]: (state, action) => [action.payload, ...state],
  // [addContactSuccsess]: (state, action) => console.log(action.payload),

  [deleteContactSuccsess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [types.CHANGE_FILTER]: (_, action) => action.payload,
});

const contactsReduser = combineReducers({
  items: items,
  filter: filter,
});

const loadingReducer = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccsess]: () => false,
  [getContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccsess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccsess]: () => false,
  [deleteContactError]: () => false,
});

const itemsReducer = combineReducers({
  contacts: contactsReduser,
  isLoading: loadingReducer,
});

export default itemsReducer;
