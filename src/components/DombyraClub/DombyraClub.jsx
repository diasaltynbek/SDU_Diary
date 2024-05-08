import styles from './DombyraClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import Dombyra from '../../assets/Club_dombyra.avif';
import Dombyra2 from '../../assets/Club_dombyra2.avif';
import Dombyra3 from '../../assets/Club_dombyra3.avif';

const DombyraClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={Dombyra} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Dombyra Club"
          body={`The "Dombyra" club has a long and rich history, which began simultaneously with the founding of our university. It is considered the first club of the university and since then has been actively involved in the preservation and development of the cultural heritage of our ancestors. The club currently has around 30 members who share a passion for music, culture and tradition. The main goal of the "Dombyra" club is to continue the tradition of playing the national instrument - dombra, and to demonstrate the richness and value of our history through music. Club members strive to use dombra in various musical genres, while maintaining respect for all traditions and customs of their ancestors.`}
        />
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.imageRow}>
          <img src={Dombyra2} alt="" />
          <p>
            {`Members of the "Dombyra" club not only study music, but also study the history and culture of peoples, traditional musical genres and styles. They conduct regular classes where they learn to play the dombra, study musical works, and also participate in various cultural events and concerts where they demonstrate their skills and creativity.`}
          </p>
        </div>
        <div className={styles.imageRow}>
          <p>
            {`The Dombyra Club is an important part of the university community, having a significant
            impact on the development of students' cultural consciousness and maintaining an
            interest in the music and heritage of their people. Club members strive not only to
            preserve traditions, but also to introduce new ideas and a fresh perspective so that the
            culture of our ancestors continues to live and develop in the modern world.`}
          </p>
          <img src={Dombyra3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DombyraClub;
