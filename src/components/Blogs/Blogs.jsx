import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Blogs.module.css';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const DEFAULT_IMAGE_URL =
  'https://th.bing.com/th/id/OIP.hV6MoBaE8NYeMCugmhd7_QHaEo?rs=1&pid=ImgDetMain';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://diplomka-backend.vercel.app/api/admin/blogs');
      const sortedBlogs = response.data.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      console.log('sorted blogs', sortedBlogs);
      setBlogs(sortedBlogs);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  async function handleDeleteBlog(blog_id) {
    try {
      const response = await axios.delete(
        `https://diplomka-backend.vercel.app/api/admin/blogs/${blog_id}`
      );
      console.log('Blog deleted successfully', response.data);
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  }

  // Get current articles
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCreatePost = () => {
    setShowEditPost(false);
    setShowCreatePost(true);
  };

  const handleEditPost = (id) => {
    setSelectedId(id);
    setShowCreatePost(false);
    setShowEditPost(true);
  };

  async function handleSubmit() {
    // Use the state variables to submit the form data or perform other actions
    const newPost = {
      imageUrl: imageUrl,
      title: title,
      description: description
    };

    console.log(newPost);

    const response = await axios.post(
      'https://diplomka-backend.vercel.app/api/admin/blog/add',
      newPost,
      {
        headers: {
          'Content-Type': 'application/json' // Set content type header
        }
      }
    );
    console.log(response.data);

    // Clear input fields after submission if needed
    clearInputFields();
    setShowCreatePost(false);
    fetchBlogs();
  }

  const clearInputFields = () => {
    setImageUrl('');
    setTitle('');
    setDescription('');
  };

  async function handleUpdateBlog(blog_id) {
    const showedQuestion = {
      imageUrl: imageUrl,
      title: title,
      description: description,
      show: true
    };

    try {
      const response = await axios.put(
        `https://diplomka-backend.vercel.app/api/admin/blogs/${blog_id}`,
        showedQuestion
      );
      console.log('updated_question', response.data);

      setSelectedId(null);
      clearInputFields();
      setShowEditPost(false);
      fetchBlogs();
      console.log('blog was fetched after update');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.blogsContainer}>
      <div className={styles.titleContainer}>
        <h1>Posts</h1>
        <button onClick={handleCreatePost}>Create new post</button>
      </div>
      {showCreatePost ? (
        <div className={styles.createPostContainer}>
          <h1>Create new post</h1>
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <button className="btn btn-outline-success" onClick={() => handleSubmit()}>
              Add
            </button>
          </div>
        </div>
      ) : showEditPost ? (
        <div className={styles.createPostContainer}>
          <h1>Update the post</h1>
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div>
            <button
              className="btn btn-outline-success"
              onClick={() => handleUpdateBlog(selectedId)}
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {currentBlogs.map((blog, index) => (
              <div className="col" key={index}>
                <div className="card h-100 position-relative">
                  <img
                    src={blog.imageUrl || DEFAULT_IMAGE_URL}
                    className="card-img-top"
                    alt="blog"
                  />
                  <div className={`position-absolute ${styles.blogButtons}`}>
                    <button
                      className={`btn btn-primary ${styles.editButton}`}
                      onClick={() => handleEditPost(blog._id)}
                    >
                      <EditOutlined />
                    </button>
                    <button
                      className={`btn btn-danger ${styles.deleteButton}`}
                      onClick={() => {
                        handleDeleteBlog(blog._id);
                      }}
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    {blog.description && (
                      <p
                        className={`card-text ${blog.description.length > 100 && 'text-truncate'}`}
                      >
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
      )}
    </div>
  );
};

export default Blogs;
