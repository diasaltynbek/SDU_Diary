// AdminPage.jsx
import React, { useState } from 'react';
import QuestionsPage from '../../components/QuestionsPage/QuestionsPage';
import styles from './AdminPage.module.css';
import Quotes from '../../components/Quotes/Quotes';
import Blogs from '../../components/Blogs/Blogs';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  // State to track the selected sidebar item
  const [selectedItem, setSelectedItem] = useState('Questions');

  // Function to handle sidebar item clicks
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const logOut = () => {
    localStorage.removeItem('user_data');
  };

  return (
    <div className={styles.adminPage}>
      <div className={styles.sidebar}>
        <Link to="/">
          <img className={styles.headerLogo} src="src/assets/Logo.png" alt="" />
        </Link>
        <ul>
          <li onClick={() => handleItemClick('Questions')}>Questions</li>
          <li onClick={() => handleItemClick('Quotes')}>Quotes</li>
          <li onClick={() => handleItemClick('Blogs')}>Blogs</li>
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
        {selectedItem === 'Blogs' && <Blogs />}
        {/* Add more content components as needed */}
      </div>
    </div>
  );
};

const SettingsContent = () => {
  return <h2>Settings Content</h2>;
};

export default AdminPage;
