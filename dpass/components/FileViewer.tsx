// components/FileViewer.tsx

import React from 'react';

interface File {
  contents: string;
}

interface FileViewerProps {
  file: File;
}

const FileViewer: React.FC<FileViewerProps> = ({ file }) => {
  return (
    <div>
      <h2>File Viewer</h2>
      <p>{file.contents}</p>
    </div>
  );
};

export default FileViewer;
