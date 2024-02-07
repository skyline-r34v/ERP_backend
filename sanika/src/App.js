import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import WelcomePage from './component/welcome';
import ButtonContainer from './component/Button';
import './App.css'
import Parapage from './component/para';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/feeling" element={<Parapage />} />
          <Route path="/choice" element={<ButtonContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;