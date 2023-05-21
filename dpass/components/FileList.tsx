// components/FileList.tsx
import React from 'react';

interface File {
  name: string;
  contents: string;
}

interface FileListProps {
  files: File[];
  handleClick: (file: File) => void;
}

const FileList: React.FC<FileListProps> = ({ files, handleClick }) => {
  return (
    <div className="text-2xl">
      <h2 className='text-2xl mb-4'>Your Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => handleClick(file)} className="hover:cursor-pointer border border-blue-400 my-4 rounded-2xl hover:bg-blue-300">
            <div className="flex flex-row p-2 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h1 className="pl-2">{file.name}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
