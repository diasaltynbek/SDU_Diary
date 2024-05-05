import { useState, useEffect } from 'react';
import DefaultTextContent from '../DefaultTextContent/DefaultTextContent';
import styles from './FAQ.module.css';
import axios from 'axios';

export const FAQ = () => {
  const [title, setTitle] = useState(null);
  const [phone, setPhone] = useState(null);
  const [description, setDescription] = useState(null);
  const [shownQuestions, setShownQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get('https://diplomka-backend.vercel.app/api/questions');
        console.log('fetchedQuestions:', response.data);
        setShownQuestions(response.data);
      } catch (error) {
        console.error(error);
        return [];
      }
    }

    fetchQuestions();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchQuestions();
  //     console.log('data:', data);
  //     setShownQuestions(data);
  //   }

  //   fetchData();
  // }, []);

  async function handleSubmit() {
    // Use the state variables to submit the form data or perform other actions
    const QuestionForm = {
      title: title,
      tellNumber: phone,
      description: description
    };

    console.log(QuestionForm);

    const response = await axios.post(
      'https://diplomka-backend.vercel.app/api/public/question/add',
      QuestionForm,
      {
        headers: {
          'Content-Type': 'application/json' // Set content type header
        }
      }
    );
    console.log(response.data);

    // Clear input fields after submission if needed
    clearInputFields();
  }

  const clearInputFields = () => {
    setTitle('');
    setDescription('');
    setPhone('');
  };

  return (
    <div className={styles.FAQ_container}>
      <div>
        <DefaultTextContent
          title="Ask a Question?"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <div className={`${styles.inputs_button_container} container`}>
          <div className="row">
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="form-control"
                placeholder="+7(...)"
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
      <div>
        <div className={styles.fetchQuestionsCont}>
          <DefaultTextContent
            title="Admin Important Notes"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
          <div className={`container`}>
            {shownQuestions ? (
              <div className={styles.questionAnswerContainer}>
                {shownQuestions.map((question, index) => (
                  <div
                    key={index}
                    className={`${styles.questionAnswer} ${
                      question.show === false ? styles.hiddenQuestion : ''
                    }`}
                  >
                    <p>{question.title}</p>
                    <p>{question.description}</p>
                    <p>{question.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>There is no answered questions yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
