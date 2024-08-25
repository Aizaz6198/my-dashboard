import styles from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <div className={styles.searchCategory}>
    <input type="text" placeholder="Search..." className={styles.searchBar} />
    <select className={styles.categories}>
      <option value="">Categories</option>
      <option value="1">Category 1</option>
      <option value="2">Category 2</option>
    </select>
  </div>
);
};

export default Searchbar;
