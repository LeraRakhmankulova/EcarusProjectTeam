import styles from './App.module.sass';
// import Modal from './components/modal/Modal';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PersonalArea from './pages/PersonalArea/PersonalArea';
import MainPage from './pages/MainPage/MainPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import EcoMarket from './pages/EcoMarket/EcoMarker';
import {ModalSign} from "./components/modal/ModalSign/ModalSign";
import Modal from "./components/modal/Modal";
import {ModalSignOrRegistration} from "./components/modal/ModalSignOrRegistration/ModalSignOrRegistration";
import {ModalInputCode} from "./components/modal/ModalInputCode/ModalInputCode";
import {ModalSignForCompany} from "./components/modal/ModalSignForCompany/ModalSignForCompany";
import {ModalSignOrRegistrationForCompany} from "./components/modal/ModalSignOrRegistrationForCompany/ModalSignOrRegistrationForCompany";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
        <div className={styles.wrapper_content}>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/ecomarket' element={<PersonalArea />} />
            <Route path='/sign_or_registration' element={isOpen &&
            (<Modal children={<ModalSignOrRegistration onClose={handleModal}/>}></Modal>)}/>
            <Route path='/input_code' element={isOpen &&
            (<Modal children={<ModalInputCode onClose={handleModal}/>}></Modal>)}/>
            <Route path='/sign_for_company' element={isOpen &&
            (<Modal children={<ModalSignForCompany onClose={handleModal}/>}></Modal>)}/>
            <Route path='/sign_or_registration_for_company' element={isOpen &&
            (<Modal children={<ModalSignOrRegistrationForCompany onClose={handleModal}/>}></Modal>)}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
