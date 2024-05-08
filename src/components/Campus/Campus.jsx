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
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it look like
                    readable English.`}
          </p>
        </div>
      </div>

      <div className="d-flex text-white" style={{ backgroundColor: '#140040' }}>
        <div className={`${styles.canteenOutContainer} container d-flex align-items-center`}>
          <div className={styles.canteenContainer}>
            <h1 className="fw-bold">Our Canteen the best taste</h1>
            <hr style={{ width: '80px', border: '2px solid white' }} />
            <p>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout. The point of
                      using Lorem Ipsum is that it has a more-or-less normal distribution of
                      letters, as opposed to using 'Content here, content here', making it look like
                      readable English.`}
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
