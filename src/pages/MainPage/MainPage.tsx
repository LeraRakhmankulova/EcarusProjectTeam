import { Navigation } from 'swiper';
import Card from '../../components/Cards/BannerCard/BannerCard';

import first_banner from '../../assets/images/map.svg';
import second_banner from '../../assets/images/reduce.svg';
import rightArrow from '../../assets/images/right-arrow.svg';

import styles from './MainPage.module.sass';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Trail from '../../utils/use-spring/Trail';
import Move from '../../utils/use-spring/Move';
import Footer from "../../components/Footer/Footer";
import bgr from '../../assets/images/recl.svg'
import React from "react";
import CardButton from '../../components/ui/card-button/CardButton';
import SwiperBanner from '../../components/Swiper/Swiper';
import BannerCard from '../../components/Cards/BannerCard/BannerCard';


const MainPage = () => {
    return (
        // <Trail>
        <div className={styles.container}>
            <SwiperBanner />
            <div className={styles.blocks}>
                <BannerCard
                    title='Пункты сбора'
                    text='Посмотри, где в твоем городе можно сдать вторсырье на переработку'
                    image={first_banner}
                    link='/points' />
                <BannerCard
                    title='ЭкоМаркет'
                    text='Используй заработанные экокоины для покупки товаровиз переработанных материалов '
                    image={second_banner}
                    link='/ecomarket' />
            </div>
        </div>
        // </Trail>
    );
};

export default MainPage;