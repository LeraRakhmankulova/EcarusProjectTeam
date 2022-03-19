import styles from './App.module.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import MainPage from './pages/MainPage/MainPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import EcoMarket from './pages/EcoMarket/EcoMarker';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
        <div className={styles.main_content}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/ecomarket' element={<EcoMarket />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
