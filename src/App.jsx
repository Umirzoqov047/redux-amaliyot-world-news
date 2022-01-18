import React from 'react';
import Navbar from './components/Navbar';
import NewList from './components/NewList';
import NewsAddForm from './components/NewsAddForm';
import NewsFilter from './components/NewsFilter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <NewList />
        <div className="content__page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
      
    </div>
  );
}

export default App;