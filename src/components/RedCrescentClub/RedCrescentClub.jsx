import styles from './RedCrescentClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import RedCrescent from '../../assets/Club_redCrescent.avif';
import RedCrescent2 from '../../assets/Club_redCrescent2.avif';
import RedCrescent3 from '../../assets/Club_redCrescent3.avif';
import RedCrescent4 from '../../assets/Club_redCrescent4.avif';
import RedCrescent5 from '../../assets/Club_redCrescent5.avif';

const VisionClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={RedCrescent} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Red Crescent Club"
          body="The International Red Cross and Red Crescent Movement is the largest charity network in the world. Its units operate in different parts of the world and unite millions of volunteers. Our university also has an independent Red Crescent club. The main goal of our club is to train students in first aid.
          In everyday life, people do not understand the importance of first aid. Students attending our classes can immediately provide necessary first aid in an emergency situation. Providing first aid can save the patient's life until emergency medical services arrive. Having knowledge of first aid affects the safety and general well-being of people. Our mission is to protect lives and support people affected by emergencies. Students have the opportunity to gain knowledge in this field and acquire irreplaceable skills."
        />
      </div>
      <div className={styles.backgroundContainer}>
        <img src={RedCrescent2} alt="" />
        <img src={RedCrescent3} alt="" />
        <img src={RedCrescent4} alt="" />
        <img src={RedCrescent5} alt="" />
      </div>
    </div>
  );
};

export default VisionClub;
