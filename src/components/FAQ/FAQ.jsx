import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <div className={styles.FAQ_container}>
      <DefaultTextContent
        title="Ask a Question?"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <div className={`${styles.inputs_button_container} container`}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Write your name here..." />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="+7(...)" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Write your description here"
            ></textarea>
          </div>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default FAQ;
