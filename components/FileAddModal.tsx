import React, { useState } from 'react';

interface File {
  name: string;
  contents: string;
}

interface FileAddModalProps {
  handleAdd: (file: File) => void;
  handleClose: () => void;
}

const FileAddModal: React.FC<FileAddModalProps> = ({ handleAdd, handleClose }) => {
  const [name, setName] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAdd({ name, contents });
    setName('');
    setContents('');
  };

  return (
    <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white p-8 rounded-lg max-w-xl w-full">
        <h2 className="text-2xl mb-4">Add a File</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            File Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1"
            />
          </label>
          <label className="block mb-4">
            File Contents:
            <textarea
              value={contents}
              onChange={(e) => setContents(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-40 resize-none"
            />
          </label>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add
            </button>
            <button type="button" onClick={handleClose} className="text-gray-500 mt-2 hover:text-gray-600">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileAddModal;
