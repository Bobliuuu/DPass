import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const [walletID, setWalletID] = useState('');
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletID(event.target.value);
  };

  const handleDoneClick = () => {
    // Handle the "Done" button click event here
    console.log('Wallet ID:', walletID);
    router.push('/FilePage'); // Redirect to '/FilePage'
  };

  const isButtonDisabled = walletID.trim() === '';

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4 text-center">Welcome, User</h1>
      <p className="text-2xl font-bold mb-4 mx-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus urna, venenatis a est in, rutrum molestie odio. Etiam vestibulum accumsan augue, ac cursus dui dictum in. Fusce ac lectus cursus, sollicitudin turpis id, iaculis tellus. Morbi elementum enim eget eros scelerisque porttitor.</p>

      <div className="flex">
        <input
          type="text"
          value={walletID}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mr-2"
          placeholder="Enter Wallet ID"
        />
        <button
          onClick={handleDoneClick}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${
            isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isButtonDisabled}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
