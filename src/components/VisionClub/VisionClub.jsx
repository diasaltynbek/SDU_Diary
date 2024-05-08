import styles from './VisionClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import ClubVision from '../../assets/Club_vision.avif';
import ClubVision2 from '../../assets/Club_vision2.avif';
import ClubVision3 from '../../assets/Club_vision3.avif';
import ClubVision4 from '../../assets/Club_vision4.avif';
import ClubVision5 from '../../assets/Club_vision5.avif';

const VisionClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={ClubVision} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="About Event Club"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
"
        />
      </div>
      <div className={styles.backgroundContainer}>
        <div className={styles.aboutClub}>
          <DefaultTextContent
            titleFsz="2rem"
            bodyFsz="1rem"
            color="white"
            title="About Event Club"
            body="Within Vision Club, we have curated five distinctive departments, each catering to different facets of personal enrichment:
            Cooking Department: Delve into the art of culinary excellence with our Cooking Department. Immerse yourself in the world of flavors and aromas as we host 3-5 masterclasses every month, unveiling the secrets behind crafting an array of delectable delicacies.
            Mercy Department: Compassion lies at the heart of our Mercy Department. With unwavering dedication, we assemble 7-10 social packages filled with essential goods for families in need, extending our support to orphanages, nursing homes, and collaborating with organizations like Menin Armanym to fulfill children's dreams.
            Education Department: In our Education Department, we celebrate intellect and academic prowess. Recognizing the top 10 students from each profession, we orchestrate intellectual competitions, Olympiads in mathematics, and offer insightful webinars, fostering a culture of continuous learning and growth.
            Handmade Department: Unleash your creativity in our Handmade Department. Join us for 3 masterclasses every month, where we explore the realms of drawing, sewing, calligraphy, and more, honing our skills and crafting beauty with our own hands.
            Marvel Department: Prepare to be amazed in our Marvel Department. From the excitement of the Good Fair to the electrifying energy of SDU Arua and the enchantment of our New Year's concert, we orchestrate grand events within the walls of SDU, bringing our community together in moments of joy and celebration."
          />
          <img src={ClubVision2} alt="" />
        </div>
        <div className={styles.row_images}>
          <img src={ClubVision3} alt="" />
          <img src={ClubVision4} alt="" />
          <img src={ClubVision5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VisionClub;
