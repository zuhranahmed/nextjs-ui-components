import styles from "../styles/cards.module.scss";

const Cards = (props) => {
  return (
    <div>
      {props.verticalCard && (
        <div className={styles.verticalCard}>
          <div className={styles.userDetails}>
            <img className={styles.image} src={props.image} />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.designation}>{props.designation}</p>
            <p className={styles.role}>Admin</p>
          </div>
          <div className={styles.buttons}>
            <a className={styles.button}>
              <img src="assets/mail.png" />
              <span>Email</span>
            </a>
            <a className={styles.button}>
              <img src="assets/phone.png" />
              <span>Call</span>
            </a>
          </div>
        </div>
      )}
      {props.horizontalCard && (
        <div className={styles.horizontalCard}>
          <div className={styles.userDetails}>
            <div>
              <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.role}>Admin</p>
              </div>
              <p className={styles.designation}>{props.designation}</p>
            </div>
            <img className={styles.image} src={props.image} />
          </div>
          <div className={styles.buttons}>
            <a className={styles.button}>
              <img src="assets/mail.png" />
              <span>Email</span>
            </a>
            <a className={styles.button}>
              <img src="assets/phone.png" />
              <span>Call</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
