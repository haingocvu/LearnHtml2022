import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Test1 from 'src/pages/test1/Test1';
import Test2 from 'src/pages/test2/Test2';
import List from 'src/pages/list/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
