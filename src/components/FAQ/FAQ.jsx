import { useState } from 'react';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';
import styles from './FAQ.module.css';
import axios from 'axios';

export const FAQ = () => {
  const [title, setTitle] = useState(null);
  const [email, setEmail] = useState(null);
  const [description, setDescription] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchQuestions();
  //     console.log('data:', data);
  //     setShownQuestions(data);
  //   }

  //   fetchData();
  // }, []);

  async function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return console.error('Email is not validated');
    }

    const QuestionForm = {
      title: title,
      tellNumber: email,
      description: description
    };

    console.log(QuestionForm);

    const response = await axios.post(
      'https://diplomka-backend.vercel.app/api/public/question/add',
      QuestionForm,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response.data);

    clearInputFields();
  }

  const clearInputFields = () => {
    setTitle('');
    setDescription('');
    setEmail('');
  };

  return (
    <div className={styles.FAQ_container}>
      <div>
        <DefaultTextContent
          title="Ask a Question?"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <div className={`${styles.inputs_button_container} container`}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write your name here..."
              />
            </div>
            <div className="col-md-6">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write your email here..."
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                rows="5"
                placeholder="Write your description here"
              ></textarea>
            </div>
          </div>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};
