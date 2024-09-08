import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import PagesContainer from './pages';

export function App() {
  return (
    <>
      <Router>
        <div className={styles.app_container}>
          <PagesContainer />
          <Navbar />
        </div>
      </Router>
    </>
  );
}
