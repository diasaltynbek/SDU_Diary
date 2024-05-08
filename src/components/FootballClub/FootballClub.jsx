import styles from './FootballClub.module.css';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';

import ClubsFootball from '../../assets/Clubs_football.avif';
import Tournament1 from '../../assets/Tournament1.avif';
import Tournament2 from '../../assets/Tournament2.avif';
import Tournament3 from '../../assets/Tournament3.avif';

const FootballClub = () => {
  return (
    <div>
      <div className={styles.aboutClub}>
        <img src={ClubsFootball} alt="" />
        <DefaultTextContent
          titleFsz="2rem"
          bodyFsz="1rem"
          title="Welcome to the University Football Club"
          body="Football Club is a dynamic community of students united by a common passion for football. We offer not just a game of football, but a whole range of opportunities for those who are passionate about this great sport. Our club provides the ideal platform for students of all skill levels - from beginners just starting their football journey to experienced players striving for excellence.
We regularly train and organize friendly and competitive matches with other clubs and teams within and outside the university. We have the opportunity for each participant to get on the field, hone their skills and enjoy playing as a team.
We have the opportunity to participate in various football tournaments and championships where our teams can demonstrate their sportsmanship and competitive spirit. This is a great opportunity for students to showcase their talent and compete at a high level.
Training and Development: Our club provides a unique opportunity for players to develop their football skills and playing technique under the guidance of experienced coaches. We provide individual training, tactical sessions and game analysis to help each player achieve their sporting goals.
"
        />
      </div>
      <div className={styles.tournament}>
        <h1>Football Tournament</h1>
        <p>
          Football Club is not only a place for sports achievements, but also a friendly community
          where students can communicate, support each other and spend time in pleasant company. We
          organize various social events, parties, outings and football matches, strengthening the
          bonds between club members. <br /> <br />
          Our club also provides students with the opportunity to participate in professional
          training, master classes and training camps with professional football players and
          coaches, opening up new perspectives for those who dream of a career in the world of
          football. <br /> <br />
          Join Football Club and plunge into the exciting world of football, where everyone can find
          their place, develop as an athlete and enjoy playing their favorite game. Our goal is to
          inspire, support and develop leaders on the field and in life.
        </p>
        <div className={styles.tournament_images}>
          <img src={Tournament1} alt="" />
          <img src={Tournament2} alt="" />
          <img src={Tournament3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FootballClub;
