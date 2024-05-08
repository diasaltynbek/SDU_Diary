import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Quotes.module.css';
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  async function handleShowQuote(quote_id) {
    const response = await axios.get(
      `https://diplomka-backend.vercel.app/api/admin/quotes/${quote_id}`
    );

    const selected_quote = response.data;

    const showedQuestion = {
      title: selected_quote.title,
      description: selected_quote.description,
      show: true
    };

    try {
      const response = await axios.put(
        `https://diplomka-backend.vercel.app/api/admin/quotes/${quote_id}`,
        showedQuestion
      );
      console.log('updated_question', response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteQuote(quote_id) {
    try {
      const response = await axios.delete(
        `https://diplomka-backend.vercel.app/api/admin/quotes/${quote_id}`
      );
      console.log('Quote deleted successfully', response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const response = await axios.get('https://diplomka-backend.vercel.app/api/admin/quotes');
        console.log('fetchedQuotes:', response.data);
        setQuotes(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchQuotes();
  }, []);

  return (
    <div className={styles.mainFunctionCont}>
      <h1>Quotes</h1>
      <div className={styles.quoteContainer}>
        {/* <div className={styles.quoteForm}>
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
        </div> */}
        {quotes.length > 0 ? (
          quotes.map((quote, index) => (
            <div key={index} className={styles.quote}>
              <h3>{quote.title}</h3>
              <hr style={{ border: '2px solid #969696', width: '90%' }} />
              <p>{quote.description}</p>

              <div className={styles.btnsContainer}>
                <button
                  className="btn btn-outline-success"
                  onClick={() => handleShowQuote(quote._id)}
                >
                  Show
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteQuote(quote._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>There are no quotes yet</p>
        )}
      </div>
    </div>
  );
};

export default Quotes;
