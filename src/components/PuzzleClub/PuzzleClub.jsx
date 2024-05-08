import styles from './PuzzleClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import Puzzle from '../../assets/Club_puzzle.avif';
import Puzzle2 from '../../assets/Club_puzzle2.avif';
import Puzzle3 from '../../assets/Club_puzzle3.avif';
import Puzzle4 from '../../assets/Club_puzzle4.avif';

const PuzzleClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={Puzzle} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Red Crescent Club"
          body="The International Red Cross and Red Crescent Movement is the largest charity network in the world. Its units operate in different parts of the world and unite millions of volunteers. Our university also has an independent Red Crescent club. The main goal of our club is to train students in first aid.
          In everyday life, people do not understand the importance of first aid. Students attending our classes can immediately provide necessary first aid in an emergency situation. Providing first aid can save the patient's life until emergency medical services arrive. Having knowledge of first aid affects the safety and general well-being of people. Our mission is to protect lives and support people affected by emergencies. Students have the opportunity to gain knowledge in this field and acquire irreplaceable skills."
        />
      </div>
      <div className={styles.imageRow}>
        <img src={Puzzle2} alt="" />
        <img src={Puzzle3} alt="" />
        <img src={Puzzle4} alt="" />
      </div>
    </div>
  );
};

export default PuzzleClub;
