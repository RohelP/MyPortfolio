import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";


function App() {

  return (
    <div classname={styles.App}>
      <Navbar />
      Hello world
    </div>
  );
}

export default App;
