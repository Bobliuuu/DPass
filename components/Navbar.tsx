import React from 'react';
import Link from 'next/link';
import DDriveLogo from '../public/DDrive.png';

const Navbar: React.FC = () => {
  const handleLogout = () => {
    // Perform logout logic here
    // Redirect to the login page
    // router.push('/login');
  };

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-4 py-2 w-full fixed top-0">
      <div className="flex items-center">
        <img
          src={DDriveLogo.src}
          alt="Logo"
          className="w-8 h-8 mr-2"
        />
        <h1 className="text-xl font-bold">DDrive</h1>
      </div>
      <div className="flex items-center ml-auto">
        <ul className="flex space-x-4 mr-4"> {/* Add margin-right to create spacing */}
          <li>
            <Link href="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/FilePage">Files</Link>
          </li>
          <li>
            <Link href="/PurchasePage">Buy Storage</Link>
          </li>
        </ul>
        <button className="ml-1" onClick={handleLogout}>Logout</button> {/* Add margin-left to create spacing */}
      </div>
    </nav>
  );
};

export default Navbar;
