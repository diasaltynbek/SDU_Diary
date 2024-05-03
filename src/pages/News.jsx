import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Default image URL
const DEFAULT_IMAGE_URL =
  'https://th.bing.com/th/id/OIP.hV6MoBaE8NYeMCugmhd7_QHaEo?rs=1&pid=ImgDetMain';

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6); // Number of articles per page

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apiKey = '2a36938ed301405cad849fb8c13d3246';
      const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      const response = await axios.get(apiUrl);
      const sortedArticles = response.data.articles.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      setArticles(sortedArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentArticles.map((article, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={article.urlToImage || DEFAULT_IMAGE_URL}
                className="card-img-top"
                alt="Article"
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                {article.description && (
                  <p className={`card-text ${article.description.length > 100 && 'text-truncate'}`}>
                    {article.description}
                  </p>
                )}
                <p className="card-text">Published At: {article.publishedAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 && 'active'}`}>
                <button className="page-link" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === Math.ceil(articles.length / articlesPerPage) && 'disabled'
              }`}
            >
              <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NewsComponent;
