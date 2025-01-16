import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomMenu from './MenuBar';
import Dashboard from './dashboard/Dashboard';

const Routing = () => {
  return (
    <Router>
      <div className="flex">
        <CustomMenu />
        <div className="flex-1">
          <Routes>
            <Route path="/" />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Routing;
