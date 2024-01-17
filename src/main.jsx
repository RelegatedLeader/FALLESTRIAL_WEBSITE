// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import MainScreen from './MainScreen';
import Sign_up_page from './Sign_up_page';
import MePage from './MePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/main-screen' element={<MainScreen />} />
      <Route path='/sign-up' element={<Sign_up_page />} />
      <Route path='/me-page' element={<MePage />} />
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  </Router>
);
