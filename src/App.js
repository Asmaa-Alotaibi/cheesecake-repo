import styles from "./styles";
import photo1 from "./Cheesecake.jpg";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div>
      <div>
        <title>CheeseCake Shop</title>
        <h1 style={styles.text}>Yammy CheeseCake just for you...</h1>
        <img style={styles.bigImg} src={photo1} alt="cheesecake shop" />
      </div>
      <ItemList />
    </div>
  );
}

export default App;
