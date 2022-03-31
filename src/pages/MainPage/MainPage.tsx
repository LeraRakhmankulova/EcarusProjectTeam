import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Card from '../../components/Card/card';

import first_pict from '../../assets/images/first-slide-pict.svg';
import second_pict from '../../assets/images/second-slide-pict.svg';
import third_pict from '../../assets/images/third-slide-pict.svg';
import first_banner from '../../assets/images/map.svg';
import second_banner from '../../assets/images/reduce.svg';
import rightArrow from '../../assets/images/right-arrow.svg';

import styles from './MainPage.module.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperStyle.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const MainPage = () => {
        return (
            <div className={styles.content_wrapper}>
                <div className={styles.swiper_wrapper}>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                    >
                        <SwiperSlide>
                            <Card title="Сделаем мир чище"
                                text="Сдай макулатуру или старую одежду и получи скидку
                             на покупку товаров из переработанных материалов"
                                main_picture={first_pict}
                                main_background="#B3EDC8"
                                button_color="#07C88E"
                                button_text="Условия сервиса"
                                pict_button="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card title="А вы знали..."
                                text="что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,
                            а полиэтиленовых пакетов — от 100 до 200 лет?"
                                main_picture={second_pict}
                                main_background="#FFE48F"
                                button_color="#07C88E"
                                button_text="Узнать больше"
                                pict_button="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card title="Что с масками?"
                                text="Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку."
                                main_picture={third_pict}
                                main_background="#BFF0DE"
                                button_color="#07C88E"
                                button_text="Пункты сбора масок"
                                pict_button="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className={styles.inline_blocks}>
                <div className={styles.left_block}>
                    <NavLink to='/points'>
                        <Card title="Пункты сбора"
                            text="Посмотри, где в твоем городе
                        можно сдать вторсырье
                        на переработку"
                            main_picture={first_banner}
                            main_background="white"
                            button_color="rgba(62, 80, 114, 0.08)"
                            button_text=""
                            pict_button={rightArrow} />
                    </NavLink>
                </div>
                <div className={styles.right_block}>
                    <NavLink to='/ecomarket'>
                        <Card title="ЭкоМаркет"
                            text="Используй заработанные
                        экокоины для покупки товаровиз переработанных материалов"
                            main_picture={second_banner}
                            main_background="white"
                            button_color="rgba(62, 80, 114, 0.08)"
                            button_text=""
                            pict_button={rightArrow} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainPage;