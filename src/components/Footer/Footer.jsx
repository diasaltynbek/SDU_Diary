import styles from './Footer.module.css';

const Footer = () => {
  return (
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
      <hr className="container-fluid" style={{ width: '100%', border: '2px solid white' }} />

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
  );
};

export default Footer;
