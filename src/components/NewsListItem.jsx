import React from 'react';
function NewsListItem({onDelete,name, description, category}) {
  

    
  let elementClassName;
  switch(category){
    case "Evro News":
      elementClassName = "bg-danger bg-gradient"
      break
    case "Russian News":
      elementClassName = "bg-primary bg-gradient"
      break
    case "Uzb News":
      elementClassName = "bg-success bg-gradient"
      break
    case "Sport News":
      elementClassName = "bg-warning bg-gradient"
      break
    default:
      elementClassName = "bg-info bg-gradient"
  }
  return (
    <div>
      <li className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`}>
        
        <div className="card-body">
          <h3 className='card-title'>{name}</h3>
          <p className='card-text'>{description}</p>
          
        </div>
        <img className='img-news' src="https://images.pexels.com/photos/1577882/pexels-photo-1577882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='img'/>
        <span className='position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light'>
          <button onClick={onDelete}   type='button' className='btn-close' aria-label='Close'></button>
        </span>
      </li>
    </div>
  );
}

export default NewsListItem;