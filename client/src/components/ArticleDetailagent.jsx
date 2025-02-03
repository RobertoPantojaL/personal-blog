import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function ArticleDetail() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`/api/articles/${id}`);
      setArticle(response.data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  

  if (!article) return <div className="container">Loading...</div>;

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{article.title}</h1>
      <div className="card">
        <p>{article.content}</p>
      </div>
      <div className="button-group">
        <Link to="/agent" className="btn">Back to List</Link>
      </div>
    </motion.div>
  );
}

export default ArticleDetail;