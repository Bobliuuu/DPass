import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Dashboard: React.FC = () => {
  const [currency, setCurrency] = useState<string[]>(['Solana', 'Ethereum', 'Dogecoin']);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [contents, setContents] = useState('');
  const [jackalValue, setJackalValue] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransferSuccessful, setIsTransferSuccessful] = useState(false);
  const router = useRouter();

  const handleAmountChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = parseFloat(e.target.value);
    setContents(e.target.value);
    if (!isNaN(value)) {
      setJackalValue(value * 0.0023077348);
    } else {
      setJackalValue(null);
    }
  };

  const handleTransfer = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsTransferSuccessful(true);
      setTimeout(() => {
        router.push('/FilePage');
      }, 2000);
    }, 2000);
  };

  useEffect(() => {
    if (isTransferSuccessful) {
      const timer = setTimeout(() => {
        setIsTransferSuccessful(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isTransferSuccessful]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Buy Storage</title>
        <link rel="icon" href="../public/DDriveTransparent.png" />
      </Head>

      <h1 className="text-2xl mb-4">Trade for Jackal</h1>
      <div className="w-96">
        <label className="block mb-4">
          Currency
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1 appearance-none focus:outline-none focus:border-blue-500"
          >
            <option value="">Select currency</option>
            {currency.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Amount
          <textarea
            value={contents}
            onChange={handleAmountChange}
            className="border border-gray-300 rounded-md px-3 leading-loose py-2 w-full h-12 resize-none flex items-center"
            type="number"
          />
        </label>
        <label className="block mb-4">
          Jackal
          <textarea
            value={jackalValue !== null ? jackalValue.toFixed(10) : ''}
            readOnly
            className="border border-gray-300 rounded-md px-3 leading-loose py-2 w-full h-12 resize-none bg-gray-100 flex items-center"
          />
        </label>
      </div>
      <button
        onClick={handleTransfer}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Transfer'}
      </button>
      {isTransferSuccessful && (
        <p className="text-green-500 mt-2">Transfer successful. Redirecting...</p>
      )}
    </div>
  );
};

export default Dashboard;
