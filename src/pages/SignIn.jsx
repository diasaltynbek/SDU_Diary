import { useState } from 'react';
import hiddenImg from '../assets/hidden.png';
import visibilityImg from '../assets/visibility.png';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const [visibility, setVisibility] = useState({
    pass: { visible: false }
  });
  const navigate = useNavigate();

  const handleVisibility = (inputName) => {
    setVisibility((prevPasswords) => ({
      ...prevPasswords,
      [inputName]: {
        ...prevPasswords[inputName],
        visible: !prevPasswords[inputName].visible
      }
    }));
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleForgotPassword = () => {
    navigate('forgot_password');
  };

  return (
    <div className="back-sign-in">
      <div className="dark-lay">
        <h4 onClick={handleBack} className="ret-btn d-flex gap-2" style={{ cursor: 'pointer' }}>
          <span>&#129120;</span>HOME
        </h4>
        <h1 className="welcome-text text-white h1">Welcome Back!</h1>
      </div>

      <div className="text-dark d-flex flex-column sec-side">
        <div className="d-flex flex-column gap-5">
          <div>
            <h1>SIGN IN</h1>
            <p>Welcome back! Please sign in to your account.</p>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-1"
              id="floatingText"
              placeholder="Write your email here..."
            />
            <label htmlFor="floatingText">Email</label>
          </div>

          <div className="form-floating">
            <input
              type={visibility.pass.visible ? 'text' : 'password'}
              className="form-control mb-1"
              id="floatingText"
              placeholder="Write your password here..."
            />
            <label htmlFor="floatingText">Password</label>
            <img
              onClick={() => handleVisibility('pass')}
              src={visibility.pass.visible == false ? hiddenImg : visibilityImg}
              style={{ width: '24px', position: 'absolute', top: '30%', left: '91%' }}
              alt=""
            />
          </div>
        </div>

        <div className="d-flex flex-column text-center">
          <div className="d-flex justify-content-between" style={{ fontSize: '12px' }}>
            <div className="d-flex align-items-center">
              <input type="checkbox" />
              <p className="pt-3 px-2">Remember me</p>
            </div>
            <p onClick={handleForgotPassword} className="pt-3">
              Forgot Password?
            </p>
          </div>
          <button className="btn text-white" style={{ backgroundColor: '#140040' }}>
            Sign In
          </button>
          <p className="pt-4">
            Don’t have an account?{' '}
            <span style={{ color: '#140040', cursor: 'pointer' }}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
