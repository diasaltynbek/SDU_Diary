import { useState } from 'react';
import Header from '../../components/Header';
import styles from './Clubs.module.css';

const Clubs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className={styles.clubs_container}>
      <div className={styles.back_clubs}>
        <div className={styles.overlay_for_clubs}>
            <Header />
          <div className="container text-white sec-text" style={{ fontSize: '1.5rem' }}>
            <h1 style={{ fontSize: '3.5  rem', fontWeight: '500' }}>Clubs</h1>
            <hr style={{ width: '70px', border: '2px solid white' }} />
            <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry.</p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-4">
        <div className={`container d-flex flex-wrap mt-5`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tabIndex) => (
            <button
              key={tabIndex}
              defaultValue={1}
              className={`${styles.modal_buttons} ${
                activeTab === tabIndex
                  ? 'active btn rounded-pill text-white px-3 py-2'
                  : 'btn rounded-pill bg-white border px-3 py-2'
              }`}
              onClick={() => handleTabClick(tabIndex)}
              style={{ backgroundColor: '#140040' }}
            >
              {
              tabIndex === 1 ? 'Football Club' :
              tabIndex === 2 ? 'Event Club' :
              tabIndex === 3 ? 'Vision Club' : 
              tabIndex === 4 ? 'Red Crescent club' : 
              tabIndex === 5 ? 'Shapagat club' : 
              tabIndex === 6 ? 'Puzzle club' :
              tabIndex === 7 ? 'Dombyra club' :
              tabIndex === 8 ? 'Oyan theatre club' : 'Zhasa club'
              }
            </button>
          ))}
        </div>
        <hr className="container-fluid" style={{ width: '90%' }} />
        <div className={styles.modal_items_container}>
          <div className="d-flex flex-column gap-5">
            {activeTab === 1 && (
              <div>
                <div className="d-flex mt-5 p-5 gap-5 align-items-center">
                  <img className={styles.aboutSDU2_png} src="src/assets/SDUCLubs1.png" alt="" />
                  <div className={`${styles.about_SDU2} p-4`}>
                    <h1>About Suleyman Demirel University</h1>
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
              </div>
            )}
            {activeTab === 2 && (
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
                      <div
                        className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}
                      >
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
                      <div
                        className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}
                      >
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
                      <div
                        className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}
                      >
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
                      <div
                        className={`${styles.faculty_itemsContainer} d-flex align-items-end gap-4`}
                      >
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
            )}
            {/* {activeTab === 3 && (
            <div className="mt-5">
              <div className="">
                <h1
                  className="text-white display-3"
                  style={{
                    backgroundColor: '#140040',
                    width: '1519px',
                    left: '-50px',
                    padding: '50px 180px',
                    marginTop: '100px'
                  }}
                >
                  SDU
                </h1>
                <div className="d-flex gap-5" style={{ marginTop: '-300px', marginLeft: '500px' }}>
                  <img src="src/assets/SDUCampus1.png" alt="" />
                  <img src="src/assets/SDUCampus2.png" alt="" />
                  <img src="src/assets/SDUCampus3.png" alt="" />
                </div>
              </div>

              <div
                className=" container d-flex align-items-center gap-5"
                style={{ marginTop: '200px' }}
              >
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

              <div
                className="d-flex text-white"
                style={{ marginTop: '200px', backgroundColor: '#140040' }}
              >
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

              <div className="container d-flex flex-column gap-5" style={{ marginTop: '200px' }}>
                <div className="d-flex align-items-center gap-5">
                  <img src="src/assets/SDUMotivation1.png" alt="" />
                  <h1 className="fw-bold">When your vision is clear</h1>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-5">
                  <h1 className="fw-bold">Strategy is Easy, Education for All</h1>
                  <img src="src/assets/SDUMotivation2.png" alt="" />
                </div>
              </div>

              <footer
                className="text-white"
                style={{ backgroundColor: '#140040', marginTop: '100px' }}
              >
                <div className="container d-flex justify-content-between p-4">
                  <img src="src/assets/Logo.png" style={{ width: '70px', height: '70px' }} alt="" />
                  <div>
                    <p style={{ fontWeight: 'bold' }}>About us</p>
                    <p>About SDU</p>
                    <p>Faculty</p>
                    <p>Campus</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Clubs</p>
                    <p>Event club</p>
                    <p>Vision club</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold' }}>Contacts</p>
                    <div className="d-flex gap-2">
                      <img
                        style={{ width: '18px', height: '18px' }}
                        src="src/assets/phone.png"
                        alt=""
                      />
                      <p>+7 (747) 307 95 65</p>
                    </div>
                    <div className="d-flex gap-2">
                      <img
                        style={{ width: '18px', height: '18px' }}
                        src="src/assets/email.png"
                        alt=""
                      />
                      <p>info@sdu.edu.kz</p>
                    </div>
                  </div>
                  <p style={{ fontWeight: 'bold' }}>Quote</p>
                </div>
                <hr
                  className="container-fluid"
                  style={{ width: '1400px', border: '2px solid white' }}
                />

                <div className="container-fluid pb-5" style={{ width: '1400px' }}>
                  <div className="d-flex gap-4">
                    <img src="src/assets/GooglePlay.png" alt="" />
                    <img src="src/assets/AppStore.png" alt="" />
                  </div>
                  <div>
                    <div>
                      <img src="src/assets/VK.png" alt="" />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          )} */}

            <footer className={`${styles.footer_container} text-white`}>
              <div className={`${styles.footer_firstPart} d-flex justify-content-between px-5 py-4`}>
                <img src="src/assets/Logo.png" alt="" />
                <div>
                  <p style={{ fontWeight: 'bold' }}>About us</p>
                  <p>About SDU</p>
                  <p>Faculty</p>
                  <p>Campus</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Clubs</p>
                  <p>Event club</p>
                  <p>Vision club</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Contacts</p>
                  <div className='d-flex flex-column gap-3'>
                    <div className="d-flex gap-2">
                      <img src="src/assets/phone.png" alt="" />
                      +7 (747) 307 95 65
                    </div>
                    <div className="d-flex gap-2">
                      <img src="src/assets/email.png" alt="" />
                      info@sdu.edu.kz
                    </div>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold' }}>Quote</p>
              </div>
              <hr
                className="container-fluid"
                style={{ width: '100%', border: '2px solid white' }}
              />

              <div className="container pb-5 d-flex justify-content-between">
                <div className="d-flex gap-4">
                  <img src="src/assets/GooglePlay.png" alt="" />
                  <img src="src/assets/AppStore.png" alt="" />
                </div>
                <div className='d-flex gap-3'>
                 <a href="https://vk.com/"><img className='foot-logo' src="src/assets/VK.png" alt="" /></a>
                 <a href="https://www.youtube.com/"><img className='foot-logo' src="src/assets/Youtube.png" alt="" /></a>
                 <a href="https://dzen.ru/"><img className='foot-logo' src="src/assets/Zen.png" alt="" /></a>
                 <a href="https://web.telegram.org/"><img className='foot-logo' src="src/assets/Telegram.png" alt="" /></a>
                 <a href="https://web.whatsapp.com/"><img className='foot-logo' src="src/assets/Whatsapp.png" alt="" /></a>
                 <a href="https://www.facebook.com/"><img className='foot-logo' src="src/assets/Facebook.png" alt="" /></a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
