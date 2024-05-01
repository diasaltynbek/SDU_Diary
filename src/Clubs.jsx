import React from 'react'
import { useNavigate } from 'react-router';

const Clubs = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
      }

    const handleAbout = () => {
        navigate('/about_us');
    }

    const handleSignIn = () => {
        navigate('/sign_in');
    };

  return (
    <div>
      <div className='back-clubs'>
            <div className='overlay-for-about'>
                <div className='d-flex direction-column'>
                    <div className='container-fluid text-white d-flex justify-content-between align-items-center text'>
                        <img src="src/assets/Logo.png" alt="" />
                        <ul className='d-flex gap-5' style={{listStyle: 'none', cursor: 'pointer'}}>
                            <li onClick={handleHome}>HOME</li>
                            <li onClick={handleAbout}>ABOUT US</li>
                            <li>SDU ALUMNI</li>
                            <li>CLUBS</li>
                            <li>CONTACTS</li>
                            <li>QUOTE</li>
                        </ul>
                        <div className='d-flex gap-4'>
                            <img style={{width: '20px', height: '20px'}} src="src/assets/Search.png" alt="" />
                            <p onClick={handleSignIn} style={{cursor: 'pointer'}}>SIGN IN</p>
                        </div>
                    </div>
                    <hr className='container-fluid text' style={{width: '1400px', height: '2px', marginTop: '60px', backgroundColor: '#fff'}}/>
                </div>
            </div>
        </div>

        <div className='container text-white sec-text' style={{fontSize: '1.5rem'}}>
                <h1 style={{fontSize: '3.5  rem', fontWeight:'500'}}>Clubs</h1>
                <hr style={{width: '70px', border: '2px solid white'}}/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
    </div>
  )
}

export default Clubs
