import React, { useState, useRef, useEffect } from 'react';
import { BsFilter } from 'react-icons/bs';

function Header({ onPriorityClick, onStatusClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <header className='header'>
      <nav className={`navbar ${isDropdownOpen ? 'open' : ''}`}>
        <ul className='navlinks'>
          <li onClick={toggleDropdown}>
              Display
            <ul className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <li onClick={onPriorityClick}>Priority</li>
              <li onClick={onStatusClick}>Status</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
