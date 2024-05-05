import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import styles from './SignIn.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleSubmit() {
    // Use the state variables to submit the form data or perform other actions
    const loginData = {
      email: email,
      password: password
    };

    const response = await axios.post('https://diplomka-backend.vercel.app/api/auth', loginData, {
      headers: {
        'Content-Type': 'application/json' // Set content type header
      }
    });
    console.log(response.data);
    localStorage.setItem('user_data', JSON.stringify(loginData));
    navigate('/');

    // Clear input fields after submission if needed
    clearInputFields();
  }

  const clearInputFields = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.back_sign_in}>
      <div className={styles.dark_lay}>
        <Link to="/">
          <h4 className={`${styles.ret_btn} d-flex gap-2`} style={{ cursor: 'pointer' }}>
            <span>&#129120;</span>HOME
          </h4>
        </Link>
        <h1 className={`${styles.welcome_text} text-white h1`}>Welcome Back!</h1>
      </div>

      <div className={`text-dark d-flex flex-column ${styles.sec_side}`}>
        <div>
          <h1>SIGN IN</h1>
          <p>Welcome back! Please sign in to your account.</p>
        </div>
        <div className={`${styles.inputContainer} d-flex flex-column gap-5`}>
          <div className={styles.form_floating}>
            <label htmlFor="floatingText">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control mb-1"
              id="floatingText"
              placeholder="Write your email here..."
            />
          </div>

          <div className={styles.form_floating}>
            <label htmlFor="floatingText">Password</label>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="input password"
              id="floatingText"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="btn text-white"
            style={{ backgroundColor: '#140040' }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
