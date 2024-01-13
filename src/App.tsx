import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <Toaster/>
      <Dashboard/>
    </div>
  );
}

export default App;
