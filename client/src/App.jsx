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
          <Link to="/blog/sup" className="nav-link">Home</Link>
        </div>
      </nav>
      <div className="container">
        <h1>Vistas Disponibles</h1>
        <ul>
          <li className='view'><Link to="/blog/sup">Autor</Link></li>
          <li className='view'><Link to="/blog/agent">Visitante</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/blog/sup" element={<ArticleList />} />
        <Route path="/blog/agent" element={<ArticleListagent />} />
        <Route path="/blog/new" element={<ArticleForm />} />
        <Route path="/blog/edit/:id" element={<ArticleForm />} />
        <Route path="/blog/article/:id" element={<ArticleDetail />} />
        <Route path="/blog/articleagent/:id" element={<ArticleDetailagent />} />
      </Routes>
    </div>
  );
}

export default App;