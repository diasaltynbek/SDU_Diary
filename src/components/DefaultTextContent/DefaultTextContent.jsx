import styles from './DefaultTextContent.module.css';

const DefaultTextContent = ({ title, body, color, lineColor, titleFsz, bodyFsz }) => {
  return (
    <div
      className={`${styles.about_mainText} container text-${color} sec-text`}
      style={{ fontSize: `${bodyFsz ? bodyFsz : '1.5rem'}` }}
    >
      <h1 style={{ fontSize: `${titleFsz ? titleFsz : '2rem'}` }}>{title}</h1>
      <hr style={{ width: '70px', border: `2px solid ${lineColor}` }} />
      <p>{`${body}`}</p>
    </div>
  );
};

export default DefaultTextContent;
