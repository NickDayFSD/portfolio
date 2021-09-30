import React from 'react';
import PdfViewer from './PdfViewer';
import resume from './NickDay.pdf';

function Resume() {
  return <PdfViewer pdf={resume} />;
}

export default Resume;
