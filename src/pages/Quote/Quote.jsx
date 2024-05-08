import { useState, useEffect } from 'react';
import FirstContent from '../../components/FirstContent/FirstContent';
import Footer from '../../components/Footer/Footer';

import styles from './Quote.module.css';
import axios from 'axios';

import BackgroundQuote from '../../assets/Background_quote.avif';

const Quote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get('https://diplomka-backend.vercel.app/api/public/quotes');
        console.log('fetchedQuotes:', response.data);
        setQuotes(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchQuotes();
  }, []);

  async function handleSubmit() {
    try {
      const newQuote = {
        title: title,
        description: description
      };

      console.log(newQuote);

      const response = await axios.post(
        'https://diplomka-backend.vercel.app/api/public/quotes/add',
        newQuote,
        {
          headers: {
            'Content-Type': 'application/json' // Set content type header
          }
        }
      );
      console.log(response.data);

      // Clear input fields after submission if needed
      clearInputFields();
    } catch (error) {
      console.error(error);
    }
  }

  const clearInputFields = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <FirstContent
        imgURL={BackgroundQuote}
        title="Quote"
        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <div className={styles.mainFunctionCont}>
        <div className={styles.quoteContainer}>
          <div className={styles.quoteForm}>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputField}
            />
            <textarea
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textareaField}
            ></textarea>
            <button onClick={handleSubmit} className={styles.addButton}>
              Add Quote
            </button>
          </div>
          {quotes.length > 0 ? (
            quotes.map((quote, index) => (
              <div key={index} className={styles.quote}>
                <h3>{quote.title}</h3>
                <hr style={{ border: '2px solid white', width: '90%' }} />
                <p>{quote.description}</p>
              </div>
            ))
          ) : (
            <p>There are no quotes yet</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quote;
