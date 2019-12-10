import React from 'react';
import Navbar from './Navbar';

const SavedList = props => (
  <div className="saved-list">
    <div className='navbar'>
      <Navbar />
    </div>
    <div className="saved-box">
      <h3>Saved Movies:</h3>
      <div className="saved-box-content">
        {props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
      </div>
      
    </div>
    {/* <div className="home-button">Home</div> */}
  </div>
);

export default SavedList;
