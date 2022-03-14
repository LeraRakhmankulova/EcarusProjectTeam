import styles from './App.module.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import MainPage from './pages/MainPage/MainPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/ecomarket' element={<PersonalArea />} />
          {/*<Route path='/sign_or_registration' element={isOpen &&*/}
          {/*(<Modal children={<ModalSignOrRegistration onClose={handleModal}/>}></Modal>)}/>*/}
          {/*<Route path='/input_code' element={isOpen &&*/}
          {/*(<Modal children={<ModalInputCode onClose={handleModal}/>}></Modal>)}/>*/}
          {/*<Route path='/sign_for_company' element={isOpen &&*/}
          {/*(<Modal children={<ModalSignForCompany onClose={handleModal}/>}></Modal>)}/>*/}
          {/*<Route path='/sign_or_registration_for_company' element={isOpen &&*/}
          {/*(<Modal children={<ModalSignOrRegistrationForCompany onClose={handleModal}/>}></Modal>)}/>*/}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
