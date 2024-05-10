import styles from './Campus.module.css';

import SDUCampus1 from '../../assets/SDUCampus1.avif';
import SDUCampus2 from '../../assets/SDUCampus2.avif';
import SDUCampus3 from '../../assets/SDUCampus3.avif';

import SDULibrary1 from '../../assets/SDULibrary1.avif';
import SDULibrary2 from '../../assets/SDULibrary2.avif';
import SDULibrary3 from '../../assets/SDULibrary3.avif';
import SDULibrary4 from '../../assets/SDULibrary4.avif';

import SDUCanteen1 from '../../assets/SDUCanteen1.avif';
import SDUCanteen2 from '../../assets/SDUCanteen2.avif';
import SDUCanteen3 from '../../assets/SDUCanteen3.avif';
import SDUCanteen4 from '../../assets/SDUCanteen4.avif';

import SDUMotivation1 from '../../assets/SDUMotivation1.avif';
import SDUMotivation2 from '../../assets/SDUMotivation2.avif';

const Campus = () => {
  return (
    <div className={styles.campusContainer}>
      <div className={styles.linePhotoContainer}>
        <h1 className="text-black display-3">SDU</h1>
        <div className={`${styles.campusPhotoContainer} d-flex gap-5`}>
          <img src={SDUCampus1} alt="" />
          <img src={SDUCampus2} alt="" />
          <img src={SDUCampus3} alt="" />
        </div>
      </div>

      <div className="container d-flex align-items-center gap-5">
        <div className="d-flex flex-column gap-5">
          <div className={`${styles.libraryPhotoContainer} container d-flex`}>
            <img src={SDULibrary1} alt="" />
            <img src={SDULibrary2} alt="" />
          </div>
          <div className={`${styles.libraryPhotoContainer} container d-flex`}>
            <img src={SDULibrary3} alt="" />
            <img src={SDULibrary4} alt="" />
          </div>
        </div>
        <div className={styles.libraryContainer}>
          <h1 className="fw-bold">SDU Library</h1>
          <hr style={{ width: '80px', border: '2px solid black' }} />
          <p>
            {`The Scientific Library was opened in 1996 and is one of the most important departments of Suleyman Demirel University. Library provides services to undergraduate, graduate and Ph.D. students as well as university staff.
Book collection: The broad collection of the Library has printed books and e-books, subscriptions and trials to online databases. The book collections are updated annually in accordance with the requirements of the University's educational programs, with the increasing number of electronic publications. Materials are purchased from well-known local and international book-selling networks, publishing houses, information agencies and companies.
LCC: The transition of the library system to the Classification of the Congress (LCC) in accordance with international standards has begun in 2021. Today, all the literature in the former reading room has been translated into this new format and is available to readers.
Mission: To contribute to improving the quality of education and science in the SDU by providing reliable and effective information resources, as well as high-quality services to researchers, instructors, staff and students of the university.`}
          </p>
        </div>
      </div>

      <div className="d-flex text-white" style={{ backgroundColor: '#140040' }}>
        <div className={`${styles.canteenOutContainer} container d-flex align-items-center`}>
          <div className={styles.canteenContainer}>
            <h1 className="fw-bold">Our Canteen the best taste</h1>
            <hr style={{ width: '80px', border: '2px solid white' }} />
            <p>
              {`Many students and employees express a wish to live healthier lives. The university wants to help promote this by offering delicious, healthy and nutritious food in the university canteens that all meet the standards of healthy canteen services set by the Danish Ministry of Environment and Food.
Thus, the food selection is healthy, low-fat and varied. The canteen strives to offer well-prepared and savory food that is nutritious and adapted to the seasons.`}
            </p>
          </div>
          <div className="d-flex gap-2">
            <div className={`${styles.canteenPhotoContainer} d-flex flex-column gap-2`}>
              <img src={SDUCanteen1} alt="" />
              <img src={SDUCanteen2} alt="" />
            </div>
            <div className={`${styles.canteenPhotoContainer} d-flex flex-column gap-2`}>
              <img src={SDUCanteen3} alt="" />
              <img src={SDUCanteen4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column gap-5">
        <div
          className={`${styles.motivationPhotoContainer} d-flex align-items-center justify-content-between gap-5`}
        >
          <img src={SDUMotivation1} alt="" />
          <h1 className="fw-bold">When your vision is clear</h1>
        </div>
        <div
          className={`${styles.motivationPhotoContainer} d-flex align-items-center justify-content-between gap-5`}
        >
          <h1 className="fw-bold">Strategy is Easy, Education for All</h1>
          <img src={SDUMotivation2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Campus;
