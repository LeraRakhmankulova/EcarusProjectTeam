import styles from './App.module.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import MainPage from './pages/MainPage/MainPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import EcoMarket from './pages/EcoMarket/EcoMarket';
import CollectionPoints from "./pages/CollectionPoints/CollectionPoints";
import AboutService from './pages/AboutService/AboutService';
import React, { FC, useState } from 'react'



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
              <Route path='/lk' element={<PersonalArea />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
// const [books, setBooks] = useState(null);
//
// const apiURL = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/materials";
// axios.defaults.params = {
//   'user_id': 1,
//   'page_size': 2
// };
// const fetchData = async () => {
//   const response = await axios.get(apiURL)
//   setBooks(response.data)
//   return books
// }