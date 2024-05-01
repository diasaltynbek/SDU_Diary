import React from 'react'
import { useNavigate } from 'react-router'


const Home = () => {
    const navigate = useNavigate();


    const handleAbout = () => {
        navigate('about_us');
    }

    const handleSignIn = () => {
        navigate('sign_in');
    };

    const handleClubs = () => {
        navigate('clubs');
    };

  return (
    <div className='back'>
        <div className='overlay'>
            <div className='d-flex direction-column'>
                <div className='container-fluid text-white d-flex justify-content-between align-items-center text'>
                    <img src="src/assets/Logo.png" alt="" />
                    <ul className='d-flex gap-5' style={{listStyle: 'none', cursor: 'pointer'}}>
                        <li>HOME</li>
                        <li onClick={handleAbout}>ABOUT US</li>
                        <li>SDU ALUMNI</li>
                        <li onClick={handleClubs}>CLUBS</li>
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

        <div className='container text-white sec-text' style={{fontSize: '1.5rem'}}>
            <h1 style={{fontSize: '3.5  rem'}}>SDU DIARY</h1>
            <p>The best knowledge is only here</p>
            <button className='btn btn-outline-light px-5 rounded-pill d-flex align-items-center gap-2'> LEARN MORE <span style={{fontSize: '20px'}}>&#129122;</span></button>
        </div>
    </div>
  )
}

export default Home
