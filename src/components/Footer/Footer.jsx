import styles from './Footer.module.css';
import Logo from '../../assets/Logo.avif';
import VK from '../../assets/VK.png';
import Youtube from '../../assets/Youtube.png';
import Dzen from '../../assets/Dzen.png';
import Telegram from '../../assets/Telegram.png';
import Whatsapp from '../../assets/Whatsapp.png';
import Facebook from '../../assets/Facebook.png';

const Footer = () => {
  function sendEmail(emailAddress) {
    const subject = encodeURIComponent('');
    const body = encodeURIComponent('');
    const emailUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    // Open the email window
    window.open(emailUrl);
  }

  return (
    <footer className={`${styles.footer_container} text-white`}>
      <div className={`${styles.footer_firstPart} d-flex justify-content-between `}>
        <img src={Logo} alt="" />
        <div className={styles.footerText}>
          <p style={{ fontWeight: 'bold' }}>About us</p>
          <p>About SDU</p>
          <p>Faculty</p>
          <p>Campus</p>
        </div>
        <div className={styles.footerText}>
          <p style={{ fontWeight: 'bold' }}>Clubs</p>
          <p>Event club</p>
          <p>Vision club</p>
        </div>
        <div className={styles.footerText}>
          <p style={{ fontWeight: 'bold' }}>Contacts</p>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex gap-2">
              <img src="src/assets/phone.png" alt="" />
              +7 (747) 307 95 65
            </div>
            <div onClick={() => sendEmail('info@sdu.edu.kz')} className="d-flex gap-2">
              <img src="src/assets/email.png" alt="" />
              info@sdu.edu.kz
            </div>
          </div>
        </div>
        <p style={{ fontWeight: 'bold' }}>Quote</p>
      </div>
      <hr className="container-fluid" style={{ width: '100%', border: '2px solid white' }} />

      <div className={`${styles.footer_secondPart} container d-flex justify-content-between`}>
        <div className={styles.playStore}>
          <img src="src/assets/GooglePlay.png" alt="" />
          <img src="src/assets/AppStore.png" alt="" />
        </div>
        <div className={styles.messengers}>
          <a href="https://vk.com/">
            <img className="foot-logo" src={VK} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img className="foot-logo" src={Youtube} alt="" />
          </a>
          <a href="https://dzen.ru/">
            <img className="foot-logo" src={Dzen} alt="" />
          </a>
          <a href="https://web.telegram.org/">
            <img className="foot-logo" src={Telegram} alt="" />
          </a>
          <a href="https://web.whatsapp.com/">
            <img className="foot-logo" src={Whatsapp} alt="" />
          </a>
          <a href="https://www.facebook.com/">
            <img className="foot-logo" src={Facebook} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
