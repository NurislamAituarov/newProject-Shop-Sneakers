import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Purchases from '../purchases/Purchases';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Purchases" element={<Purchases />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
