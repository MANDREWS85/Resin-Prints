import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Website from './Website';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios, {isCancel, AxiosError} from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <React.StrictMode>
    <Website />
  </React.StrictMode>
</BrowserRouter>
);

