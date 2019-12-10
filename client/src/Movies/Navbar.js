import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar = props => {
  return (
    <div className='navbar-content'>
      <Link to='/'>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}; 

export default Navbar; 