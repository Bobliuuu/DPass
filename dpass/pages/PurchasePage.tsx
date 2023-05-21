import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const [currency, setCurrency] = useState<string[]>(['Solana', 'Ethereum', 'Dogecoin']);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [contents, setContents] = useState('');
  const [jackalValue, setJackalValue] = useState<number | null>(null);
  const router = useRouter();

  const handleAmountChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = parseFloat(e.target.value);
    setContents(e.target.value);
    if (!isNaN(value)) {
      setJackalValue(value * 0.01);
    } else {
      setJackalValue(null);
    }
  };

  const handleTransfer = () => {
    // Perform transfer logic here
    console.log('Transfer initiated');
    console.log('Selected Currency:', selectedCurrency);
    console.log('Amount:', contents);
    console.log('Jackal Contents:', jackalValue);

    // Redirect back to the dashboard
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Trade for Jackal</h1>
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
          className="border border-gray-300 rounded-md px-3 py-2 w-full h-12 resize-none"
          type="number"
        />
      </label>
      <label className="block mb-4">
        Jackal
        <textarea
          value={jackalValue !== null ? jackalValue.toFixed(2) : ''}
          readOnly
          className="border border-gray-300 rounded-md px-3 py-2 w-full h-12 resize-none bg-gray-100"
        />
      </label>
      <button
        onClick={handleTransfer}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Transfer
      </button>
    </div>
  );
};

export default Dashboard;
