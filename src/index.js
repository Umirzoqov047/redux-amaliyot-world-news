import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css"
import App from "./App";
import {Provider} from "react-redux";
import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import news from './redux/reducers/news';
import filters from './redux/reducers/filters';
import  ReduxThunk from "redux-thunk"


const stringMiddleware = (store) => (next) => (action) => {
  if(typeof action === "string"){
    return next({type: action})
  }
  return next(action)
}
const store = createStore(combineReducers({news, filters}),compose(applyMiddleware(ReduxThunk,stringMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__() ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);











// const enhancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const oldDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     if(typeof action === "string"){
//       return oldDispatch({type: action})
//     }
//     return oldDispatch(action)
//   }
//   return store
// }