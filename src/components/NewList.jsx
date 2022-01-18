import React from "react";
import { useCallback, useEffect } from "react";
import useHttp from "../Hook/useHttp";
import {useSelector, useDispatch} from "react-redux";
import { newsDeleted, newsFetch} from "../redux/action"
import Spinner from './Spinner';
import Error from './Error';
import NewsListItem from "./NewsListItem";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {createSelector} from "reselect"
import "../style/NewList.css"


export default function NewList(){

  const filteredNewsSelected = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.news.news,
    (filters, news) => {
      if(filters === "all") {
        console.log("render")
        return news
      }else{
        return news.filter(s => s.category === filters)
      }
    }
  )

  const filteredNews = useSelector(filteredNewsSelected)
  const filterLoadingStatus = useSelector(state => state.filterLoadingStatus)
  const dispatch = useDispatch();
  const {request} = useHttp();
  
  useEffect(() => {
    dispatch(newsFetch(request))
    //eslint-disable-next-line
  },[])
  
  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/news/${id}`,"DELETE")
      .then(dispatch(newsDeleted(id)))
  //eslint-disable-next-line
  },[])
  
  if(filterLoadingStatus === 'loading'){
    return <Spinner />
  }
  else if(filterLoadingStatus ===  "error"){
    return <Error />
  }
  
  const renderNewsList = (arr) =>{
    if(arr.length === 0) {
      return (
        <CSSTransition timeout={100} classNames="item">
          <h4 className="text-center mt-5">News doesn't exists</h4>
        </CSSTransition>
      ) 
    }

    return arr.map(({id, ...props}) => {
       return(
         <CSSTransition key={id} timeout={100} classNames="item">
           <NewsListItem  onDelete={() => onDelete(id)} {...props}   />
         </CSSTransition>
       ) 
    }).reverse()
  }
  const element = renderNewsList(filteredNews)
  
  return (
    <TransitionGroup component="ul">
      {element}
    </TransitionGroup>
  )
}
