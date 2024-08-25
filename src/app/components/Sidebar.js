import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.heading}>Sidebar</h2>
      <button className={styles.option}>Option 1</button>
      <button className={styles.option}>Option 2</button>
      <button className={styles.option}>Option 3</button>
      <button className={styles.option}>Option 4</button>
      <div className={styles.progressBar}>Progress bar</div>
    </div>
  );
};

export default Sidebar;
