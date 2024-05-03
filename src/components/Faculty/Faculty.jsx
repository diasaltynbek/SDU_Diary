import styles from './Faculty.module.css';

const Faculty = () => {
  return (
    <div className="d-flex justify-content-center gap-5">
      <div className="d-flex flex-column gap-5">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-5"
            style={{ backgroundColor: '#140040' }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}>
              <img src="src/assets/SDUGreenLogo.png" alt="" />
              <p>SDU Business School</p>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li style={{ width: '585px' }}>
              <p className="px-3 fw-bold">
                6B04101 Economics <br />
                6B04102 Management <br />
                6B04103 Accounting and Audit <br />
                6B04104 Finance <br />
                6B04105 Digital Marketing
              </p>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-5"
            style={{ backgroundColor: '#140040' }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}>
              <img src="src/assets/SDURedLogo.png" alt="" />
              <p>SDU Education & Humanities</p>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li style={{ width: '585px' }}>
              <p className="px-3 fw-bold">
                6B01101 Pedagogy and Psychology <br />
                6B01201 Preschool training and education <br />
                6B01301 Pedagogy & Methods of primary education <br />
                6B01501 Mathematics (pedagogical) <br />
                6B01502 Chemistry & Biology <br />
                6B01503 Physics Informatics <br />
                6B01504 Informatics <br />
                6B01601 History <br />
                6B01701 Kazakh language & literature <br />
                6B01702 Foreign Language: Two Foreign Languages <br />
                6B01801 Social Pedagogy based on values <br />
                6B02302 Translation Studies <br />
                6B02304 Applied Philology
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column gap-5">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-5"
            style={{ backgroundColor: '#140040' }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}>
              <img src="src/assets/SDUBlueLogo.png" alt="" />
              <p>SDU Engineering and Natural Sciencies</p>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li style={{ width: '585px' }}>
              <p className="px-3 fw-bold">
                6B06101 Information System <br />
                6B06102 Computer Science <br />
                6B06103 Mathematical and Computer Modeling <br />
                6B05401 Mathematics <br />
                6B06104 Multimedia Sciences <br />
                6B05402 Statistics and Data Science
              </p>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-5"
            style={{ backgroundColor: '#140040' }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}>
              <img src="src/assets/SDUPurpleLogo.png" alt="" />
              <p>SDU Law & Social</p>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li style={{ width: '585px' }}>
              <p className="px-3 fw-bold">
                6B03101 International relations <br />
                6B03201 Multimedia and TV Journalism <br />
                6B04201 Applied Law <br />
                6B04202 International Law <br />
                6B04203 Law of Public Administration
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
