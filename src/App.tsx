import styles from './App.module.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import EcoMarket from './pages/EcoMarket/EcoMarket';
import CollectionPoints from "./pages/CollectionPoints/CollectionPoints";
import AboutService from './pages/AboutService/AboutService';
import Profile from './pages/Profile/Profile';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
 
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
          <div className={styles.main_content}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/ecomarket' element={<EcoMarket />} />
              <Route path='/points' element={<CollectionPoints />} />
              <Route path='/about' element={<AboutService />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
