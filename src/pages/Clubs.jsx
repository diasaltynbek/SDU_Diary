import Header from '../components/Header';

const Clubs = () => {
  return (
    <div>
      <div className="back-clubs">
        <Header />
      </div>

      <div className="container text-white sec-text" style={{ fontSize: '1.5rem' }}>
        <h1 style={{ fontSize: '3.5  rem', fontWeight: '500' }}>Clubs</h1>
        <hr style={{ width: '70px', border: '2px solid white' }} />
        <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
      </div>
    </div>
  );
};

export default Clubs;
