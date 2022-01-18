import { useState } from "react"
import useHttp from './../Hook/useHttp';
import { useDispatch, useSelector } from 'react-redux';
import {v4} from "uuid"
import { newsCreated } from "../redux/action";

export default function NewsAddForm(){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const {request} = useHttp();
  const {filterLoadingStatus, filters} = useSelector(state => state.filters)
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNews = {id: v4(), name, description, category};
    request ("http://localhost:3001/news", "POST", JSON.stringify(newNews))
      .then(res => console.log(res))
      .then(dispatch(newsCreated(newNews)))
      .catch(err => console.log(err))

    setName("")
    setCategory("")
    setDescription("")
  }

  const renderFilters = (filters, status) =>{
    if(status === "loading"){
      return <option>Loading option</option>
    }else if(status === "error"){
      return <option>Error options</option>
    }

    if(filters && filters.length > 0) {
      return filters.map(({name, label}) => {
        //eslint-disable-next-line
        if(name === "all") return;
        return <option key={name} value={name}>{label}</option>
      })
    }
  }

  return(
    <form onSubmit={onSubmitHandler} className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Name for News</label>
        <input 
          type="text" 
          required name="name" 
          id="name" 
          className="form-control" 
          placeholder="What is name of News ???" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">Description</label>
        <textarea 
          type="text" 
          required name="text" 
          id="text" 
          className="form-control" 
          placeholder="What is your news about???" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Choose category of news</label>
        <select  
          required className="form-select" 
          id="category" 
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option >Category of News</option>
          {renderFilters(filters, filterLoadingStatus)}
        </select>
      </div>
      <button type="submit" className="btn btn-dark text-white shadow-lg">Create News</button>
    </form>
  )
}