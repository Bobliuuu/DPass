import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Head from 'next/head'

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
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="../public/DDriveTransparent.png" />
      </Head>
      <h1 className="text-6xl font-bold mb-4 text-center">Welcome, User</h1>
      <ol className="list-decimal my-8 ">
        <li>
          Go to {' '}
          <a href="https://app.jackalprotocol.com/" className="text-blue-500 hover:underline">https://app.jackalprotocol.com/</a>
        </li>
        <li>Get access to your Keplr wallet</li>
        <li>Connect it to Jackal</li>
        <li>
          Get Jackal coins using our transfer protocol{' '}
          <Link href="/PurchasePage" className="text-blue-500 hover:underline">here</Link>
        </li>
      </ol>

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
