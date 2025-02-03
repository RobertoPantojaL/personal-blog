import React, { useState, useEffect } from 'react';
import axios from '../config/axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`/api/articles/${id}`);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/articles/${id}`, { title, content });
      } else {
        await axios.post('/api/articles', { title, content });
      }
      navigate('/blog/sup');
    } catch (error) {
      console.error('Error submitting article:', error);
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{id ? 'Edit Article' : 'New Article'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">{id ? 'Update' : 'Create'} Article</button>
        <Link to="/blog/sup" className="btn" style={{marginLeft: '10px'}}>Cancel</Link>
      </form>
    </motion.div>
  );
}

export default ArticleForm;