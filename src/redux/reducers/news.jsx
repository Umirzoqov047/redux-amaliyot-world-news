import {createReducer} from "@reduxjs/toolkit"
import {newsFetching, newsFetched, newsFetchingError, newsCreated,newsDeleted} from '../action';

const initialState = {
  news: [],
  newsLoadingStatus: "def",
}

const news = createReducer(initialState, {
  [newsFetching] : state => {state.newsLoadingStatus = "loading"},
  [newsFetched]: (state, action) => {
    state.news = action.payload;
    state.newsLoadingStatus ="def"
  },
  [newsFetchingError]: state => {state.newsLoadingStatus = "error"},
  [newsDeleted]: (state, action) => {state.news = state.news.filter(s => s.id !== action.payload)},
  [newsCreated]: (state, action) => {state.news.push(action.payload)}
}, [], state => state)

export default news;


// const news = createReducer(initialState, builder => {
//   builder
//     .addCase(newsFetching,(state) => {
//       state.newsLoadingStatus = "loading"
//     })
//     .addCase(newsFetched, (state,action) => {
//       state.news = action.payload;
//       state.newsLoadingStatus = "def"
//     })
//     .addCase(newsFetchingError, state => {
//       state.newsLoadingStatus = "error"
//     })
//     .addCase(newsDeleted, (state, action) => {
//       state.news = state.news.filter(s => s.id !== action.payload)
//     })
//     .addCase(newsCreated, (state, action) => {
//       state.news.push(action.payload)
//     })
//     .addDefaultCase(() => {})
// })

// const news = (state = initialState, action) =>{
//   switch(action.type){
//     
//     
//     case "NEWS_DELETED":
//       return{
//         ...state,
//         news: state.news.filter(s => s.id !== action.payload)
//       }
    
//     case "NEWS_CREATED":
       
//       return{
//         ...state,
//         news: [...state.news, action.payload]
//       }
//     default:
//       return state
//   }
// }