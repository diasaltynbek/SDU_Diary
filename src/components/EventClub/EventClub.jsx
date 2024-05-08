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
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
      </div>
      <div style={{ backgroundColor: '#140040' }} className={styles.aboutClub}>
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          color="white"
          title="About Event Club"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
        <img src={ClubEvent2} alt="" />
      </div>
    </div>
  );
};

export default EventClub;
