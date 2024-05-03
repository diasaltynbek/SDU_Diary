import styles from './Campus.module.css';

const Campus = () => {
  return (
    <div className={styles.campusContainer}>
      <div className={styles.linePhotoContainer}>
        <h1 className="text-black display-3">SDU</h1>
        <div className={`${styles.campusPhotoContainer} d-flex gap-5`}>
          <img src="src/assets/SDUCampus1.png" alt="" />
          <img src="src/assets/SDUCampus2.png" alt="" />
          <img src="src/assets/SDUCampus3.png" alt="" />
        </div>
      </div>

      <div className="container d-flex align-items-center gap-5">
        <div className="d-flex flex-column gap-5">
          <div className="container d-flex gap-5">
            <img src="src/assets/SDULibrary1.png" alt="" />
            <img src="src/assets/SDULibrary2.png" alt="" />
          </div>
          <div className="container d-flex gap-5">
            <img src="src/assets/SDULibrary3.png" alt="" />
            <img src="src/assets/SDULibrary4.png" alt="" />
          </div>
        </div>
        <div>
          <h1 className="fw-bold">Suleyman Demirel University Library</h1>
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
        <div className="container d-flex p-5 align-items-center gap-5">
          <div>
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
            <div className="d-flex flex-column gap-2">
              <img src="src/assets/SDUCanteen1.png" alt="" />
              <img src="src/assets/SDUCanteen2.png" alt="" />
            </div>
            <div className="d-flex flex-column gap-2">
              <img src="src/assets/SDUCanteen3.png" alt="" />
              <img src="src/assets/SDUCanteen4.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column gap-5">
        <div className="d-flex align-items-center gap-5">
          <img src="src/assets/SDUMotivation1.png" alt="" />
          <h1 className="fw-bold">When your vision is clear</h1>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-5">
          <h1 className="fw-bold">Strategy is Easy, Education for All</h1>
          <img src="src/assets/SDUMotivation2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Campus;
