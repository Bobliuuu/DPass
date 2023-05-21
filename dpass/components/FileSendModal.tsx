import React, { useState } from 'react';

interface File {
  name: string;
  contents: string;
}

interface FileSendModalProps {
  handleSend: (file: File, recipient: string) => void;
  handleClose: () => void;
  recipients: string[];
}

const FileSendModal: React.FC<FileSendModalProps> = ({ handleSend, handleClose, recipients }) => {
  const [selectedRecipient, setSelectedRecipient] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend({ name: '', contents: '' }, selectedRecipient);
    handleClose();
    setSelectedRecipient('');
  };

  return (
    <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-8 rounded-lg max-w-xl w-full">
        <h2 className="text-2xl mb-4">Send a File</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Send to:
            <select
              value={selectedRecipient}
              onChange={(e) => setSelectedRecipient(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1 appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value="">Select recipient</option>
              {recipients.map((recipient) => (
                <option key={recipient} value={recipient}>
                  {recipient}
                </option>
              ))}
            </select>
          </label>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Send
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-600 py-2 px-4 rounded border border-gray-300"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileSendModal;
