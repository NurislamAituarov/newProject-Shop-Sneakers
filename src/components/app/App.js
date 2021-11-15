import './App.css';
import Header from '../header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from '../errorBoundary/errorBoundary';

const Main = lazy(() => import('../main/Main'));
const Purchases = lazy(() => import('../selected/Selected'));
const Bought = lazy(() => import('../bought/Bought'));

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <hr />
        <Suspense fallback={<h1>Loading...</h1>}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Purchases" element={<Purchases />} />
              <Route path="/Bought" element={<Bought />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
