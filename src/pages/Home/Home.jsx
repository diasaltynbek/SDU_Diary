import { Header } from '../../components/Header/Header';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.back}>
      <div className={styles.overlay}>
        <Header />

        <div className={`container text-white ${styles.sec_text}`} style={{ fontSize: '1.5rem' }}>
          <h1 style={{ fontSize: '3.5  rem' }}>SDU DIARY</h1>
          <p>The best knowledge is only here</p>
          <div>
            <button
              className={`btn btn-outline-light px-5 rounded-pill d-flex align-items-center gap-2 ${styles.btn_learn_more}`}
            >
              LEARN MORE <span style={{ fontSize: '20px' }}>&#129122;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
