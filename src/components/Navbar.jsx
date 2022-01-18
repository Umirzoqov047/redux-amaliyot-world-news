
export default function Navbar(){
  
 
  return(
    <>
      <nav className="navbar navbar-light bg-darkblue">
        <div className="container-fluid">
          <a className="navbar-brand text-light">World News</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
    


  )
}