// components/FileViewer.tsx

import React from 'react';

interface File {
  name: string;
  contents: string;
}

interface FileViewerProps {
  file: File;
}

const FileViewer: React.FC<FileViewerProps> = ({ file }) => {
  return (
    <div className='w-full'>
      <h1 className="text-2xl mb-4">{file.name}</h1>

      <p>{file.contents}</p>
    </div>
  );
};

export default FileViewer;
