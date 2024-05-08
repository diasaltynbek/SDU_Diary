import styles from './ZhasaClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import Zhasa from '../../assets/Club_zhasa.avif';
import Zhasa2 from '../../assets/Club_zhasa2.avif';
import Zhasa3 from '../../assets/Club_zhasa3.avif';
import Zhasa4 from '../../assets/Club_zhasa4.avif';

const ZhasaClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={Zhasa} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Zhasa Club"
          body={`Zhasa Club - is a creative association of students who are passionate not only about photography and videography, but also about design in all its forms. Our club provides a unique environment where creativity and innovation combine with technical prowess and inspiration, allowing members to develop their skills and bring their most ambitious projects to life.`}
        />
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.imageRow}>
          <img src={Zhasa2} alt="" />
          <p>
            {`We combine photography, videography and design in one club, which allows our members to experiment with different types of art and find their own unique style. We believe that combining these areas provides greater opportunities for self-expression and creative growth.`}
          </p>
        </div>
        <div className={styles.imageRow}>
          <p>
            {`In the club we actively support joint creative projects, where participants can join forces and create unique works. This could be a collaboration between a photographer and a designer to create visual concepts, shoot videos with subsequent processing and editing, or develop designs for advertising campaigns.`}
          </p>
          <img src={Zhasa3} alt="" />
        </div>
        <div className={styles.imageRow}>
          <img src={Zhasa4} alt="" />
          <p>
            {`We regularly invite professional photographers, videographers and designers to conduct master classes and training sessions on various aspects of creativity. Participants can learn new shooting techniques, master image and video processing programs, and learn about the latest trends in the world of design.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZhasaClub;
