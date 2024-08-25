import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {[...Array(6)].map((_, index) => (
        <div key={index} className={styles.featureBox}>
          <h3>Feature {index + 1}</h3>
          <button className={styles.button}>Click here</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
