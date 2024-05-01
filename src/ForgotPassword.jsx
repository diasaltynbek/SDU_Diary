import React from 'react'
import { useNavigate } from 'react-router'

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/sign_in')
  }
  return (
    <div className='back-sign-in'>
      <div className='dark-lay'>
        <h4 onClick={handleBack} className='ret-btn d-flex gap-2' style={{cursor: 'pointer'}}><span>&#129120;</span>BACK</h4>
        <h1 className='welcome-text text-white h1'>Welcome Back!</h1>
      </div>

      <div className='text-dark d-flex flex-column sec-side'>
        <div className='d-flex flex-column gap-5 mt-5'>
          <div>
            <h1>FORGOT PASSWORD</h1>
            <p>Create your new account! Please sign up to your new account.</p>
          </div>
          <div className='d-flex flex-column gap-4 mt-5'>
            <div className='form-floating'>
              <input type="email" className='form-control mb-1' id='floatingText' placeholder='Write your email here...' />
              <label htmlFor="floatingText">Email</label>
            </div>

            <button className='btn text-white' style={{backgroundColor: '#140040'}}>Submit</button>
          </div>

      </div>  
    </div>  
    </div>
  )
}

export default ForgotPassword
