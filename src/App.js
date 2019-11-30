import React from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import './Styles/App.css';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
