import React, { useState, useEffect } from 'react';
import axios from '../config/axios';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('/api/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <div className="container">
      <h1>Articles</h1>
      

      <Link to="/blog/new" className="btn">New Article</Link>
        <br />
        <small>aqui permite lectura, edición y creación de articulos</small>
        <br />
           <div className="article-grid">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{article.title}</h2>
            <p>{article.content.substring(0, 100)}...</p>
            <Link to={`/blog/article/${article.id}`} className="btn">Read More</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;