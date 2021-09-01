import React from 'react';
import '../../App.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
const file = 'http://localhost:3000/GT CV.pdf'

function Resume() {
    return (
        <div className='resume'>
            <Document file={file}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    )
}

export default Resume
