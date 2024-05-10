import { useState } from 'react';
import styles from './About.module.css';
import Campus from '../../components/Campus/Campus';
import FirstContent from '../../components/FirstContent/FirstContent';
import Blogs from '../../components/Blogs/Blogs';
import Faculty from '../../components/Faculty/Faculty';
import Footer from '../../components/Footer/Footer';

import backgroundAbout from '../../assets/Background_about.avif';
import AboutSDU from '../../assets/AboutSDU.avif';
import AboutSDU2 from '../../assets/AboutSDU2.avif';

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
          {[1, 2, 3, 4].map((tabIndex) => (
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
              {tabIndex === 1
                ? 'About SDU'
                : tabIndex === 2
                ? 'Faculty'
                : tabIndex === 3
                ? 'Campus'
                : 'Blogs'}
            </button>
          ))}
        </div>
        <hr className="container-fluid" style={{ width: '90%' }} />
        <div className={styles.modal_items_container}>
          <div className="d-flex flex-column gap-5">
            {activeTab === 1 && (
              <div>
                <div
                  className={`${styles.coloredAbout} text-white d-flex align-items-center`}
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
                  <img className={`${styles.aboutSDU_png} p-3`} src={AboutSDU} alt="" />
                </div>

                <div className={`${styles.non_coloredAbout} d-flex mt-5 align-items-center`}>
                  <img className={styles.aboutSDU2_png} src={AboutSDU2} alt="" />
                  <div className={`${styles.about_SDU2} p-4`}>
                    <h1>About Suleyman Demirel University</h1>
                    <hr style={{ width: '80px', border: '2px solid black' }} />
                    <p>
                      {`Since 1996, SDU University has been one of the leading and leading academic institutions in Kazakhstan, improving the educational program through new ideas and creativity, loyalty to ethics and principles, autonomy and adaptability, achievements without limits, international professionals and leaders of the future. Also, since 2020, SDU University is a member of the League of Academic Integrity. The League of Academic Honesty is an association of higher and postgraduate education organizations of the Republic of Kazakhstan. The league's mission is to improve and improve the quality of education in the country, the way to promote and implement the ten fundamental principles of organized academic integrity.`}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && <Faculty />}
            {activeTab === 3 && <Campus />}
            {activeTab === 4 && <Blogs />}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
