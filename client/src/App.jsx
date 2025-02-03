import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleListagent from './components/ArticleListagent';
import ArticleForm from './components/ArticleForm';
import ArticleDetail from './components/ArticleDetail';
import ArticleDetailagent from './components/ArticleDetailagent';


function App() {
  return (
    <div className="App">
      <nav>
        <div className="container">
          <Link to="/" className="nav-link">Home</Link>
        </div>
      </nav>
      <div className="container">
        <h1>Vistas Disponibles</h1>
        <ul>
          <li className='view'><Link to="/sup">Supervisor</Link></li>
          <li className='view'><Link to="/agent">visitante</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/sup" element={<ArticleList />} />
        <Route path="/agent" element={<ArticleListagent />} />
        <Route path="/new" element={<ArticleForm />} />
        <Route path="/edit/:id" element={<ArticleForm />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/articleagent/:id" element={<ArticleDetailagent />} />
      </Routes>
    </div>
  );
}

export default App;