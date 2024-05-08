import { useState } from 'react';
import SDUGreenLogo from '../../assets/SDUGreenLogo.avif';
import SDURedLogo from '../../assets/SDURedLogo.avif';
import SDUBlueLogo from '../../assets/SDUBlueLogo.avif';
import SDUPurpleLogo from '../../assets/SDUPurpleLogo.avif';
import styles from './Faculty.module.css';

const Faculty = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleContainerClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.facultyContainer}>
      <div
        className={`${styles.facultyItem} ${activeIndex === 0 ? styles.active : ''}`}
        onClick={() => handleContainerClick(0)}
      >
        <div className={styles.facultyContent}>
          <img src={SDUGreenLogo} alt="SDU Business School" className={styles.facultyLogo} />
          <p className={styles.facultyText}>SDU Business School</p>
        </div>
        {activeIndex === 0 && (
          <div className={styles.additionalInfo}>
            <p>6B04101 Economics</p>
            <p>6B04102 Management</p>
            <p>6B04103 Accounting and Audit</p>
            <p>6B04104 Finance</p>
            <p>6B04105 Digital Marketing</p>
          </div>
        )}
      </div>
      <div
        className={`${styles.facultyItem} ${activeIndex === 1 ? styles.active : ''}`}
        onClick={() => handleContainerClick(1)}
      >
        <div className={styles.facultyContent}>
          <img src={SDURedLogo} alt="SDU Education & Humanities" className={styles.facultyLogo} />
          <p className={styles.facultyText}>SDU Education & Humanities</p>
        </div>
        {activeIndex === 1 && (
          <div className={styles.additionalInfo}>
            <p>6B01101 Pedagogy and Psychology</p>
            <p>6B01201 Preschool training and education</p>
            <p>6B01301 Pedagogy & Methods of primary education</p>
            <p>6B01501 Mathematics (pedagogical)</p>
            <p>6B01502 Chemistry & Biology</p>
            <p>6B01503 Physics Informatics</p>
            <p>6B01504 Informatics</p>
            <p>6B01601 History</p>
            <p>6B01701 Kazakh language & literature</p>
            <p>6B01702 Foreign Language: Two Foreign Languages</p>
            <p>6B01801 Social Pedagogy based on values</p>
            <p>6B02302 Translation Studies</p>
            <p>6B02304 Applied Philology</p>
          </div>
        )}
      </div>
      <div
        className={`${styles.facultyItem} ${activeIndex === 2 ? styles.active : ''}`}
        onClick={() => handleContainerClick(2)}
      >
        <div className={styles.facultyContent}>
          <img
            src={SDUBlueLogo}
            alt="SDU Engineering and Natural Sciences"
            className={styles.facultyLogo}
          />
          <p className={styles.facultyText}>SDU Engineering and Natural Sciences</p>
        </div>
        {activeIndex === 2 && (
          <div className={styles.additionalInfo}>
            <p>6B06101 Information System</p>
            <p>6B06102 Computer Science</p>
            <p>6B06103 Mathematical and Computer Modeling</p>
            <p>6B05401 Mathematics</p>
            <p>6B06104 Multimedia Sciences</p>
            <p>6B05402 Statistics and Data Science</p>
          </div>
        )}
      </div>
      <div
        className={`${styles.facultyItem} ${activeIndex === 3 ? styles.active : ''}`}
        onClick={() => handleContainerClick(3)}
      >
        <div className={styles.facultyContent}>
          <img src={SDUPurpleLogo} alt="SDU Law & Social" className={styles.facultyLogo} />
          <p className={styles.facultyText}>SDU Law & Social</p>
        </div>
        {activeIndex === 3 && (
          <div className={styles.additionalInfo}>
            <p>6B03101 International relations</p>
            <p>6B03201 Multimedia and TV Journalism</p>
            <p>6B04201 Applied Law</p>
            <p>6B04202 International Law</p>
            <p>6B04203 Law of Public Administration</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faculty;
