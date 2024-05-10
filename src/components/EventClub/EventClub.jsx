import styles from './EventClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import ClubEvent from '../../assets/Club_Event.avif';
import ClubEvent2 from '../../assets/Club_Event2.avif';

const EventClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={ClubEvent} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Event Club"
          body="Event Club is simply dummy text of the printing and typesetting industry. Event Club has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Event Club passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Event Club.
"
        />
      </div>
      <div style={{ backgroundColor: '#140040' }} className={styles.aboutClub}>
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          color="white"
          title="About Event Club"
          body="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        />
        <img src={ClubEvent2} alt="" />
      </div>
    </div>
  );
};

export default EventClub;
