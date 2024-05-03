import styles from './FirstContent.module.css';
import Header from '../Header/Header';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

const FirstContent = ({ imgURL, title, body }) => {
  return (
    <div className={styles.back_about} style={{ backgroundImage: `url(${imgURL})` }}>
      <div className={styles.overlay_for_about}>
        <Header />

        <DefaultTextContent title={title} body={body} color="white" lineColor="white " />
      </div>
    </div>
  );
};

export default FirstContent;
