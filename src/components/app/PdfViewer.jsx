import React from 'react';
import { Document, Page } from 'react-pdf';

// eslint-disable-next-line react/prop-types
const PdfViewer = ({ pdf }) => {
  return (
    <Document file={ pdf } options={{ workerSrc: '/pdf.worker.js ' }}>
      <Page pageNumber={1}/>
    </Document>
  );
};

export default PdfViewer;
