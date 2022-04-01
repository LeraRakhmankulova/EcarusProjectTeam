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
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'

interface Props {
  children: any
}

const Trail: FC<Props> = ({ children, ...props }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 900, friction: 300 },
    opacity: 1,
    x: 20,
    from: { opacity: 0, x: 20 },
  })

  return (
    <div className="trails-main">
      <div>
        {trail.map(({ x, ...rest }) => (
          <a.div
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div>
              {children}
            </a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

const App = () => {

  return (
    <div className={styles.wrapper}>
      <Router>

        <Header />
        <Trail>
          <div className={styles.main_content}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/ecomarket' element={<EcoMarket />} />
              <Route path='/points' element={<CollectionPoints />} />
              <Route path='/about' element={<AboutService />} />
            </Routes>
          </div>
        </Trail>
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