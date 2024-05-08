import styles from './ShapagatClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import Shapagat from '../../assets/Club_shapagat1.avif';
import Shapagat2 from '../../assets/Club_shapagat2.avif';
import Shapagat3 from '../../assets/Club_shapagat3.avif';
import Shapagat4 from '../../assets/Club_shapagat4.avif';
import Shapagat5 from '../../assets/Club_shapagat5.avif';

const ShapagatClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={Shapagat} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Shapagat Club"
          body={`The "Shapagat" club at Suleyman Demirel University is actively involved in charitable and social initiatives aimed at helping those in need and supporting public welfare. The main goal of the club is to develop students' understanding of the importance of charity and social responsibility. Club members organize charity events, concerts, fairs and other events to raise funds to support children, the sick, the elderly and other social groups, and also participate in various social projects aimed at improving the quality of life in society. Student participation in the club contributes to the formation of a volunteer culture, the development of leadership skills and has a positive impact on the lives of people in need and society as a whole. The "Shapagat" club plays an important role in the social responsibility of students and promotes the improvement of the social environment and helping those in need.`}
        />
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.imageRow}>
          <img src={Shapagat2} alt="" />
          <img src={Shapagat3} alt="" />
        </div>
        <div className={styles.imageRow2}>
          <img src={Shapagat4} alt="" />
          <img src={Shapagat5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShapagatClub;
