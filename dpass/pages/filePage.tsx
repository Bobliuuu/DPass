// pages/file-page.tsx

import React, { useState } from 'react';
import FileList from '../components/FileList';
import FileViewer from '../components/FileViewer';

interface File {
  name: string;
  contents: string;
}

const files: File[] = [
  { name: 'File 1', contents: 'This is the contents of file 1.' },
  { name: 'File 2', contents: 'This is the contents of file 2.' },
  { name: 'File 3', contents: 'This is the contents of file 3.' },
];

const FilePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClick = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <div className='container'>
      <FileList files={files} handleClick={handleClick} />
      <div>
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
