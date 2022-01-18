import { createReducer } from "@reduxjs/toolkit"
import { filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged} from "../action";
const initialState = {
  filters: [],
  filterLoadingStatus: "def",
  activeFilter: "all"
}

const filters = createReducer(initialState,{
  [filtersFetching]: state => {state.filterLoadingStatus = "loading"},
  [filtersFetched]: (state, action) => {
    state.filters = action.payload;
    state.filterLoadingStatus = "def"
  },
  [filtersFetchingError]: state => {state.filterLoadingStatus = "error"},
  [activeFilterChanged]: (state, action) => {state.activeFilter = action.payload}
},[], state => state)
export default filters;












// const filters = (state = initialState, action) =>{
//   switch(action.type){
    
//     case "FILTERS_FETCHING":
//       return{
//         ...state,
//         filterLoadingStatus: "loading"
//       }
//     case "FILTERS_FETCHED":
//       return{
//         ...state,
//         filters: action.payload,
//         filterLoadingStatus: "def"
//       }
//     case "FILTERS_FETCHING_ERROR":
//       return{
//         ...state,
//         filterLoadingStatus: "error"
//       }
    // case "ACTIVE_FILTER_CHANGED":
    //   return{
    //     ...state,
    //     activeFilter: action.payload,
        
    //   }
//     default:
//       return state
//   }
// }