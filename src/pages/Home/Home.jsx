import { Header } from '../../components/Header/Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import BackgroundHome from '../../assets/Background_home.avif';

const Home = () => {
  return (
    <div className={styles.back} style={{ backgroundImage: `url(${BackgroundHome})` }}>
      <div className={styles.overlay}>
        <Header />

        <div className={`container text-white ${styles.sec_text}`}>
          <h1>SDU DIARY</h1>
          <p>The best knowledge is only here</p>
          <div>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <button
                className={`btn btn-outline-light px-5 rounded-pill d-flex align-items-center gap-2 ${styles.btn_learn_more}`}
              >
                LEARN MORE <span>&#129122;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
