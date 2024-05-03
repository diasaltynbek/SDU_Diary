import FirstContent from '../FirstContent/FirstContent';
import styles from './Contacts.module.css';
import Background_contacts_quote from '../../assets/Background_contacts_quote.png';
import FAQ from '../FAQ/FAQ';

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
    </div>
  );
};

export default Contacts;
