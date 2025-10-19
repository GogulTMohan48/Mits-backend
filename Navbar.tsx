import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold">Serene Escapes</Link>
        <Link to="/admin/bookings">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;