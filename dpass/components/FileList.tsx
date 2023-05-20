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
    <div>
      <h2>File List</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => handleClick(file)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
