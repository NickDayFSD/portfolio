/* eslint-disable react/prop-types */
import React from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdf }) => {
  return (
    <Document file={pdf} options={{ workerSrc: '/pdf.worker.js ' }}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PdfViewer;
