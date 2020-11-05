import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
//importing this css is what immediately ennabled the external links to work, but I can understand
//that that might cause other issues
import 'react-pdf/dist/umd/Page/AnnotationLayer.css'; //"Using commonJS modules" instructions in README
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function MyApp() {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  //these functions are just for the purpose of navigation for viewing my test
  //I know you guys have it set up differently
  function goToPrevPage() {
    setPageNumber(pageNumber - 1)
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1)
  }

  //internal links functions
  function onItemClick({ pageNumber: itemPageNumber }) {
    setPageNumber(itemPageNumber);
  }

  return (
    <div>
      <nav>
          <button onClick={goToPrevPage}>Prev</button>
          <button onClick={goToNextPage}>Next</button>
      </nav>
      <Document
        file="internal_link_sample.pdf" //a test pdf file w/ internal & external links.
        onLoadSuccess={onDocumentLoadSuccess}
        onItemClick={onItemClick}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}