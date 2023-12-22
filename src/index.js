import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter-05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Counter from './연습용/test-1';
import Counter2 from './연습용/test-2';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButton2 from './chapter_08/ConfirmButton2';
import Toolbar from './chapter_09/Toolbar';
import LandingPage from './chapter_09/LandingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
