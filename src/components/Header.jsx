import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <h2>Alpha-Gate Budgeting</h2>
        <ul className='nav-item'>
          <li>Dashboard</li>
          <li>Budget Goals</li>
          <li>Other</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
