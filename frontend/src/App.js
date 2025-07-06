import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import UserList from './components/UserList';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
