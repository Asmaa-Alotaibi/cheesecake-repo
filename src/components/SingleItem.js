import styles from "../styles";

const SingleItem = (props) => {
  return (
    <div style={styles.item}>
      <p style={styles.text}>{props.cakeObject.id}</p>
      <img
        style={styles.itemImg}
        src={props.cakeObject.imag}
        alt={props.cakeObject.name}
      />
      <p style={styles.text}>{props.cakeObject.name}</p>
      <p style={styles.text}>{props.cakeObject.price} KD</p>
    </div>
  );
};
export default SingleItem;
