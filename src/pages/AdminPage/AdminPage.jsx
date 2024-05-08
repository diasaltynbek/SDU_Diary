// AdminPage.jsx
import { useState, useEffect } from 'react';
import QuestionsPage from '../../components/QuestionsPage/QuestionsPage';
import styles from './AdminPage.module.css';
import Quotes from '../../components/Quotes/Quotes';
import AddBlogs from '../../components/AddBlogs/AddBlogs';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Logo from '../../assets/Logo.png';

const AdminPage = () => {
  // State to track the selected sidebar item
  const [selectedItem, setSelectedItem] = useState('');
  const [data, setData] = useState(null);
  const [storedRole, setStoredRole] = useState(null);

  // Function to handle sidebar item clicks
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const logOut = () => {
    localStorage.removeItem('user_data');
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    console.log('storedData', storedData);

    if (!storedData) {
      return console.error('The data is not found');
    }

    setStoredRole(storedData.role);

    if (storedData.role === 'admin') {
      setSelectedItem('Questions');
    } else if (storedData.role === 'teacher') {
      setSelectedItem('Blogs');
    }

    async function getEmail() {
      try {
        const response = await axios.get(
          `https://diplomka-backend.vercel.app/api/user/${storedData.userId}`
        );
        console.log('fetched email:', response.data.data.email);

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    getEmail();
  }, []);

  return (
    <div className={styles.adminPage}>
      <div className={styles.sidebar}>
        <Link to="/">
          <img className={styles.headerLogo} src={Logo} alt="" />
        </Link>
        <ul>
          {storedRole === 'admin' ? (
            <>
              <li onClick={() => handleItemClick('Questions')}>Questions</li>
              <li onClick={() => handleItemClick('Quotes')}>Quotes</li>
            </>
          ) : storedRole === 'teacher' ? (
            <>
              <li onClick={() => handleItemClick('Blogs')}>Blogs</li>
            </>
          ) : (
            <p></p>
          )}
          <li>
            <Link onClick={() => logOut()} style={{ textDecoration: 'none', color: '#fff' }} to="/">
              Log out
            </Link>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
      <div className={styles.mainContent}>
        {/* Render main content based on the selected sidebar item */}
        {selectedItem === 'Questions' && <QuestionsPage />}
        {selectedItem === 'Quotes' && <Quotes />}
        {selectedItem === 'Blogs' && <AddBlogs />}
        {/* Add more content components as needed */}
      </div>
    </div>
  );
};

export default AdminPage;
