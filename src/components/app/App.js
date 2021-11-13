import './App.css';
import Header from '../header/Header';
// import Main from '../main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Purchases from '../purchases/Purchases';
import { lazy, Suspense } from 'react';

const Main = lazy(() => import('../main/Main'));
const Purchases = lazy(() => import('../purchases/Purchases'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Purchases" element={<Purchases />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
