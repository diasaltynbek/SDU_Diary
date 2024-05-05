import FirstContent from '../../components/FirstContent/FirstContent';
import styles from './Contacts.module.css';
import Background_contacts_quote from '../../assets/Background_contacts.png';
import { FAQ } from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import DefaultTextContent from '../../components/DefaultTextContent/DefaultTextContent';

const Contacts = () => {
  return (
    <div className={styles.contacts_content}>
      <FirstContent
        imgURL={Background_contacts_quote}
        title="Contacts"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.Pn99fk0yOFvkTzttuauS4gHaHa?w=512&h=512&rs=1&pid=ImgDetMain"
            alt=""
            width="40px"
          />
          <div className={styles.address_div}>
            <p>Address</p>
            <p className={styles.address}>City Almaty, str. Abylai Khan 1/1, Qasqelen 040900</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.1y6erh6pbE3TQH5G4_pU7wHaGS?rs=1&pid=ImgDetMain"
            alt=""
            width="40px"
          />
          <div className={styles.address_div}>
            <p>Address</p>
            <p className={styles.address}>City Almaty, str. Abylai Khan 1/1, Qasqelen 040900</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.Uh9zACcVt6jr9ym3ZYY58AAAAA?rs=1&pid=ImgDetMain"
            alt=""
            width="40px"
          />
          <div className={styles.address_div}>
            <p>Address</p>
            <p className={styles.address}>City Almaty, str. Abylai Khan 1/1, Qasqelen 040900</p>
          </div>
        </div>
      </div>
      <FAQ />
      <div>
        <DefaultTextContent
          title="How to find us?"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.511554039272!2d76.6668089922475!3d43.207727480483214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38834f7675d8a6c3%3A0x7b7d14aec270c056!2sSDU%20University!5e0!3m2!1sru!2skz!4v1714923580083!5m2!1sru!2skz"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
