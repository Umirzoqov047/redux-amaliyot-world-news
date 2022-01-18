import {createAction} from "@reduxjs/toolkit"

export const filtersFetch = (request) => (dispatch) => {
  dispatch(filtersFetching())
    request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(filtersFetchingError())
}
export const newsFetch = (request) => (dispatch) => {
  dispatch(newsFetching())
    request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)))
      .catch(() => dispatch(newsFetchingError()))
}
export const newsCreated = createAction("NEWS_CREATED")
export const newsFetched = createAction("NEWS_FETCHED")
export const newsFetching = createAction("NEWS_FETCHING")
export const newsFetchingError = createAction("NEWS_FETCHING_ERROR") 
export const newsDeleted = createAction("NEWS_DELETED")

export const filtersFetching = createAction("FILTERS_FETCHING")
export const filtersFetched = createAction("FILTERS_FETCHED")
export const filtersFetchingError = createAction("FILTERS_FETCHING_ERROR")
export const activeFilterChanged = createAction("ACTIVE_FILTER_CHANGED")


//8:04 29 - dars.