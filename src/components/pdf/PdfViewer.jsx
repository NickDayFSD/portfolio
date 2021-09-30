import React from 'react';
import { Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';

const PdfViewer = ({ pdf }) => {
  return (
    <Document file={ pdf } options={{ workerSrc: '/pdf.worker.js ' }}>
      <Page pageNumber={1}/>
    </Document>
  );
};

PdfViewer.propTypes = {
  pdf: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PdfViewer;
