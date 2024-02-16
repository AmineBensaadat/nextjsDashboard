import styles from "./pagination.module.css";
const Pagination = () => {
  return (  

    <dvi className={styles.container}>
      <button className={styles.button} disabled>previous</button>
      <button className={styles.button}>Next</button>
    </dvi>
  );
}
 
export default Pagination;