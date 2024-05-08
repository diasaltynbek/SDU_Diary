import styles from './QuanTheatreClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import QuanTheatre from '../../assets/Club_quanTheatre.avif';
import QuanTheatre2 from '../../assets/Club_quanTheatre2.avif';
import QuanTheatre3 from '../../assets/Club_quanTheatre3.avif';
import QuanTheatre4 from '../../assets/Club_quanTheatre4.avif';
import QuanTheatre5 from '../../assets/Club_quanTheatre5.avif';
import QuanTheatre6 from '../../assets/Club_quanTheatre6.avif';

const QuanTheatreClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={QuanTheatre} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Oyan theatre Club"
          body={`Oyan theatre club is a dynamic and inspiring community of students who appreciate the performing arts and want to bring their creative ideas to life on stage. We believe that everyone can find the actor, director, artist or screenwriter in themselves, and our club provides the ideal platform for the development of these talents.`}
        />
      </div>

      <div className={styles.backgroundContainer}>
        <div className={styles.aboutClub}>
          <DefaultTextContent
            titleFsz="2rem"
            bodyFsz="1rem"
            color="white"
            title="About Oyan theatre Club"
            body="We stage a variety of theater productions - from classical plays to modern experimental projects. Participate in acting selections, auditions, creating sets and costumes, and also performed roles on stage. No matter your experience, we have a place for you!
            We have special meetings where we discuss new ideas, develop scripts, discuss directing decisions and inspire each other to create unique theatrical projects. Together we form ideas and turn them into reality on stage."
          />
          <img src={QuanTheatre2} alt="" />
        </div>
      </div>
      <div className={styles.imageRow}>
        <img src={QuanTheatre3} alt="" />
        <img src={QuanTheatre4} alt="" />
        <img src={QuanTheatre5} alt="" />
        <img src={QuanTheatre6} alt="" />
      </div>
    </div>
  );
};

export default QuanTheatreClub;
