import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import MainLayout from './components/layouts/MainLayout';
import Home from './components/Home';
import Output from './components/Output';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="electrodevice" element={<Output id={14} />} />
            <Route path="furniture" element={<Output id={100} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
