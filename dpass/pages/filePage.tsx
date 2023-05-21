// FilePage.tsx

import React, { useState } from 'react';
import FileList from '../components/FileList';
import FileViewer from '../components/FileViewer';
import FileAddModal from '../components/FileAddModal';
import FileSendModal from '../components/FileSendModal';
import Head from 'next/head'

interface File {
  name: string;
  contents: string;
}

const initialFiles: File[] = [
  { name: 'File 1', contents: 'This is the contents of file 1.' },
  { name: 'File 2', contents: 'This is the contents of file 2.' },
  { name: 'File 3', contents: 'This is the contents of file 3.' },
];

const FilePage: React.FC = () => {
  const [files, setFiles] = useState(initialFiles);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [recipients, setRecipients] = useState<string[]>(['Recipient 1', 'Recipient 2', 'Recipient 3']);


  const handleUploadFromComputer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Handle file upload logic here
  };

  const handleUpload = () => {
    // Placeholder function for future functionality
  };

  const handleClick = (file: File) => {
    setSelectedFile(file);
  };

  const handleAdd = (file: File) => {
    setFiles([...files, file]);
    setShowAddModal(false);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setShowSendModal(false);
  };

  const handleDelete = (file: File) => {
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles);
    setSelectedFile(null);
  };


  return (
    <div className='flex flex-row h-screen'>
        <Head>
          <title>Files</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className='flex-0.5 bg-gray-200 p-4 flex flex-col'>
        <div className='flex-grow'>
          <FileList files={files} handleClick={handleClick} handleDelete={handleDelete} setShowSendModal={setShowSendModal}/>
        </div>

        <div className='mt-auto'>
          <h1 className='text-2xl mb-4'>Add a File</h1>
          <div className='flex flex-row'>
              <label className="w-40 flex flex-col items-center px-4 py-6 bg-white text-blue-400 rounded-lg shadow-lg tracking-wide uppercase border border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white mr-4">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">Select a file</span>
                <input type='file' className="hidden" onChange={handleUploadFromComputer}/>
              </label>

              <label className="w-40 flex flex-col items-center px-4 py-6 bg-white text-blue-400 rounded-lg shadow-lg tracking-wide uppercase border border-blue-400 cursor-pointer hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span className="mt-2 text-base leading-normal">Create</span>
                <button onClick={() => setShowAddModal(!showAddModal)}></button>
              </label>
            {/* <button onClick={handleUpload}>Upload</button> */}
          </div>
        </div>

        {showAddModal && <FileAddModal handleAdd={handleAdd} handleClose={handleCloseModal} />}
        {showSendModal && (
          <FileSendModal
            handleClose={handleCloseModal}
            recipients={recipients} // Pass the recipients prop
            handleSend={(file, recipient) => {
              // Handle sending the file to the selected recipient
            }}
          />
        )}
      </div>

      <div className='flex-1 w-full p-4 '>
        {selectedFile ? (
          <FileViewer file={selectedFile} />
        ) : (
          <p>Select a file to view its contents.</p>
        )}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          border: 3px solid red;
        }
      `}</style>
    </div>
  );
};

export default FilePage;
