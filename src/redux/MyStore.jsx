import { combineReducers, createStore } from "redux"
import counterReducer from "./counterReducer"
import personReducer from "./personReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import localStorage from "redux-persist/es/storage"


// const myStore = createStore(counterReducer)
//const myStore = createStore(personReducer)

const rootReducer = combineReducers ({
    counterStore: counterReducer,
    personStore: personReducer
})

const persistConfig = {
  key: 'root',
  storage: localStorage, // or sessionStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const myStore = createStore(persistedReducer)

export const persistor = persistStore(myStore)


export default myStore
