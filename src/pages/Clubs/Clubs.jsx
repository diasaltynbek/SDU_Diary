import { useState } from 'react';
import FirstContent from '../../components/FirstContent/FirstContent';
import BackgroundClubs from '../../assets/Background_clubs.avif';
import styles from './Clubs.module.css';
import Footer from '../../components/Footer/Footer';
import FootballClub from '../../components/FootballClub/FootballClub';
import EventClub from '../../components/EventClub/EventClub';
import VisionClub from '../../components/VisionClub/VisionClub';
import RedCrescentClub from '../../components/RedCrescentClub/RedCrescentClub';
import ShapagatClub from '../../components/ShapagatClub/ShapagatClub';
import PuzzleClub from '../../components/PuzzleClub/PuzzleClub';
import DombyraClub from '../../components/DombyraClub/DombyraClub';
import QuanTheatreClub from '../../components/QuanTheatreClub/QuanTheatreClub';
import ZhasaClub from '../../components/ZhasaClub/ZhasaClub';

const Clubs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <FirstContent
        imgURL={BackgroundClubs}
        title="Clubs"
        body="Join the club! Explore passions, forge connections, and unlock new experiences in our vibrant community of like-minded individuals."
      />

      <div className="d-flex flex-column gap-4">
        <div className={`${styles.modal_container} container d-flex mt-5`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tabIndex) => (
            <button
              key={tabIndex}
              defaultValue={1}
              className={`${styles.modal_buttons} ${
                activeTab === tabIndex
                  ? 'active btn rounded-pill text-white px-3'
                  : 'btn rounded-pill bg-white border px-3'
              }`}
              onClick={() => handleTabClick(tabIndex)}
              style={{ backgroundColor: '#140040' }}
            >
              {tabIndex === 1
                ? 'Football Club'
                : tabIndex === 2
                ? 'Event Club'
                : tabIndex === 3
                ? 'Vision Club'
                : tabIndex === 4
                ? 'Red Crescent Club'
                : tabIndex === 5
                ? 'Shapagat Club'
                : tabIndex === 6
                ? 'Puzzle Club'
                : tabIndex === 7
                ? 'Dombyra Club'
                : tabIndex === 8
                ? 'Quan Theatre Club'
                : 'Zhasa Club'}
            </button>
          ))}
        </div>
        <hr className="container-fluid" style={{ width: '90%' }} />
        <div className={styles.modal_items_container}>
          <div className="d-flex flex-column gap-5">
            {activeTab === 1 && <FootballClub />}
            {activeTab === 2 && <EventClub />}
            {activeTab === 3 && <VisionClub />}
            {activeTab === 4 && <RedCrescentClub />}
            {activeTab === 5 && <ShapagatClub />}
            {activeTab === 6 && <PuzzleClub />}
            {activeTab === 7 && <DombyraClub />}
            {activeTab === 8 && <QuanTheatreClub />}
            {activeTab === 9 && <ZhasaClub />}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
