import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './QuestionsPage.module.css';

const QuestionsPage = () => {
  const [shownQuestions, setShownQuestions] = useState([]);
  const [visitedQuestions, setVisitedQuestions] = useState({});

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

  function sendEmail(name, emailAddress, question_id, question) {
    // Construct the email URL with recipient email, subject, and body
    const subject = encodeURIComponent('Your question on the website');
    const body = encodeURIComponent(
      `Hello ${name},\n\nThank you for your question:\n\n"${question}"\n\nPlease provide an answer.\n\nBest regards.`
    );
    const emailUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    // Open the email window
    window.open(emailUrl);

    setVisitedQuestions((prevState) => ({
      ...prevState,
      [question_id]: true
    }));
  }

  async function handleShowQuestion(question_id) {
    const response = await axios.get(
      `https://diplomka-backend.vercel.app/api/admin/questions/${question_id}`
    );

    const selected_question = response.data;

    try {
      sendEmail(
        selected_question.title,
        selected_question.tellNumber,
        question_id,
        selected_question.description
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteQuestion(question_id) {
    try {
      const response = await axios.delete(
        `https://diplomka-backend.vercel.app/api/admin/questions/${question_id}`
      );
      console.log('Question deleted successfully', response.data);
    } catch (error) {
      console.error(error);
    }
  }
  //   // Update the answers state with the new value
  //   setAnswer({
  //     ...answer,
  //     [question_id]: e.target.value
  //   });
  // };

  return (
    <div>
      <h1>History</h1>
      <div className={`container`}>
        {shownQuestions ? (
          <div className={styles.questionAnswerContainer}>
            {shownQuestions.map((question, index) => (
              <div key={index} className={styles.questionAnswer}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>{question.title}</p>
                  <p>{question.tellNumber}</p>
                </div>
                <p>{question.description}</p>
                {/* <input
                  value={answer[question._id] || ''} // Use the corresponding answer value from state
                  onChange={(e) => handleInputChange(e, question._id)} // Pass question ID to identify the input
                  type="text"
                  className="form-control"
                  placeholder="Write answer here..."
                /> */}
                <div className={styles.btnsContainer}>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => handleShowQuestion(question._id, question.description)}
                    disabled={visitedQuestions[question._id]}
                  >
                    Answer in gmail
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteQuestion(question._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>There is no answered questions yet</p>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
