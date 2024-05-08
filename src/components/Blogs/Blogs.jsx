import styles from './Blogs.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DEFAULT_IMAGE_URL =
  'https://th.bing.com/th/id/OIP.hV6MoBaE8NYeMCugmhd7_QHaEo?rs=1&pid=ImgDetMain';

const AddBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://diplomka-backend.vercel.app/api/teacher/blogs');
      const sortedBlogs = response.data.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      console.log('sorted blogs', sortedBlogs);
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <div className={styles.blogsContainer}>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentBlogs.map((blog, index) => (
            <div className="col" key={index}>
              <div className="card h-100 position-relative">
                <img src={blog.imageUrl || DEFAULT_IMAGE_URL} className="card-img-top" alt="blog" />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  {blog.description && (
                    <p className={`card-text ${blog.description.length > 100 && 'text-truncate'}`}>
                      {blog.description}
                    </p>
                  )}
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
              {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 && 'active'}`}>
                  <button className="page-link" onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === Math.ceil(blogs.length / blogsPerPage) && 'disabled'
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
      \
    </div>
  );
};

export default AddBlogs;
