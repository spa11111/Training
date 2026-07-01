import { combineReducers, createStore } from "redux"
import counterReducer from "./counterReducer"
import personReducer from "./personReducer"


// const myStore = createStore(counterReducer)
//const myStore = createStore(personReducer)

const rootReducer = combineReducers => ({
    counterStore: counterReducer,
    personStore: personReducer
})

const myStore = createStore(rootReducer)

export default myStore
