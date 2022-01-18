//Yangiliklar filter orqali ajratilsin.
import {  useEffect } from 'react';
import useHttp from '../Hook/useHttp';
import { useDispatch, useSelector } from 'react-redux';
import { activeFilterChanged, filtersFetch} from "../redux/action"
import Spinner from './Spinner';
import Error from './Error';
import classNames from "classnames"

export default function NewsFilter(){

  const{filters, filterLoadingStatus, activeFilter} = useSelector(state => state.filters);
  const {request} = useHttp();
  const dispatch = useDispatch();

  useEffect ( () => {
    dispatch(filtersFetch(request))
    //eslint-disable-next-line
  },[])

  if(filterLoadingStatus === "loading"){
    return <Spinner />
  }else if(filterLoadingStatus === "error"){
    return <Error />
  }

  const renderFilter = (arr) => {
    if(arr.length === 0){
      return <h5 className="text-center mt-5">Filters not found</h5>
    }
    return arr.map(({name, className, label}) => {
      const btnClasses = classNames("btn", className, {
        "active": name === activeFilter
      })
      return <button key={name} id={name} className={btnClasses} onClick={() => dispatch(activeFilterChanged(name))}>{label}</button>
    })
  }
  const elements = renderFilter(filters)

  return(
    <div className="card shadow-lg mt-4 ">
      <div className="card-body">
        <p className="card-text">Filter by Category</p>
        <div className="btn-group">
          {elements}
          {/* <button className="btn btn-outline-dark active">All</button>
          <button className="btn btn-danger">Evro</button>
          <button className="btn btn-primary">Russin</button>
          <button className="btn btn-success">Uzb</button>
          <button className="btn btn-warning">Sport</button> */}
        </div>
      </div>
    </div>
  )
}