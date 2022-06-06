import styles from "../styles/buttons.module.scss";

const Buttons = (props) => {
  return (
    <div>
      {props.simple && (
        <button className={styles.btn}>
          <span>Button Text</span>
        </button>
      )}
      {props.left && (
        <button className={styles.btn}>
          <img src="assets/mailWhite.png" />
          <span>Button Text</span>
        </button>
      )}
      {props.right && (
        <button className={styles.btn}>
          <span>Button Text</span>
          <img src="assets/mailWhite.png" />
        </button>
      )}
    </div>
  );
};

export default Buttons;
