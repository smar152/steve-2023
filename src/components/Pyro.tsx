import styles from "./Pyro.module.scss";

function Pyro() {
  return (
    <div className={styles["pyro"]}>
      <div className={styles["before"]}></div>
      <div className={styles["after"]}></div>
    </div>
  );
}

export default Pyro;
