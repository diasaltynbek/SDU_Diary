import { useState } from 'react';
import styles from './About.module.css';
import NewsComponent from '../../components/News/News';
import Campus from '../../components/Campus/Campus';
import FirstContent from '../../components/FirstContent/FirstContent';
import backgroundAbout from '../../assets/Background_about.png';

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.about_container}>
      <FirstContent
        imgURL={backgroundAbout}
        title="About Us"
        body="We help to new students successfully adapt to the academic process and student life."
      />
      <div className="d-flex flex-column gap-4">
        <div className={`${styles.modal_container} container d-flex mt-5`}>
          {[1, 2, 3].map((tabIndex) => (
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
              {tabIndex === 1 ? 'About SDU' : tabIndex === 2 ? 'Faculty' : 'Campus'}
            </button>
          ))}
        </div>
        <hr className="container-fluid" style={{ width: '90%' }} />
        <div className={styles.modal_items_container}>
          <div className="d-flex flex-column gap-5">
            {activeTab === 1 && (
              <div>
                <div
                  className="text-white p-3 d-flex align-items-center gap-4"
                  style={{ backgroundColor: '#140040' }}
                >
                  <div className={`${styles.about_SDU} px-5`}>
                    <h1>About Suleyman Demirel University</h1>
                    <hr style={{ width: '80px', border: '2px solid white' }} />
                    <p>
                      Since 1996 SDU University has been one of the leading and innovative academic
                      institutions in Kazakhstan that improves educational program through new ideas
                      and creativity.
                      <br />
                      <br />
                      The SDU Diary is a comprehensive digital planner designed to assist freshmen
                      and students at SDU in organizing their academic and personal schedules.
                      <br />
                      <br />
                      SDU University is committed to fostering a diverse and inclusive community
                      that values and respects individuals of all backgrounds. We believe that
                      diversity enriches the educational experience and promotes a culture of
                      openness and acceptance.
                      <br />
                      <br />
                      At SDU, we celebrate diversity in all its forms, including race, ethnicity,
                      nationality, gender identity, age, religion, and socio-economic background. We
                      recognize that each person brings unique perspectives, experiences, and
                      talents to our community, and we are committed to creating an inclusive
                      environment that embraces and harnesses these differences.
                    </p>
                  </div>
                  <img
                    className={`${styles.aboutSDU_png} p-3`}
                    src="src/assets/AboutSDU.png"
                    alt=""
                  />
                </div>

                <div className="d-flex mt-5 p-5 gap-5 align-items-center">
                  <img className={styles.aboutSDU2_png} src="src/assets/AboutSDU2.png" alt="" />
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
            {activeTab === 2 && <NewsComponent />}
            {activeTab === 3 && <Campus />}

            <footer className={`${styles.footer_container} text-white`}>
              <div
                className={`${styles.footer_firstPart} d-flex justify-content-between px-5 py-4`}
              >
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
                  <div className="d-flex flex-column gap-3">
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
                <div className="d-flex gap-3">
                  <a href="https://vk.com/">
                    <img className="foot-logo" src="src/assets/VK.png" alt="" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <img className="foot-logo" src="src/assets/Youtube.png" alt="" />
                  </a>
                  <a href="https://dzen.ru/">
                    <img className="foot-logo" src="src/assets/Zen.png" alt="" />
                  </a>
                  <a href="https://web.telegram.org/">
                    <img className="foot-logo" src="src/assets/Telegram.png" alt="" />
                  </a>
                  <a href="https://web.whatsapp.com/">
                    <img className="foot-logo" src="src/assets/Whatsapp.png" alt="" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <img className="foot-logo" src="src/assets/Facebook.png" alt="" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
