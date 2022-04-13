import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import first_pict from '../../assets/images/first-slide-pict.svg';
import second_pict from '../../assets/images/second-slide-pict.svg';
import third_pict from '../../assets/images/third-slide-pict.svg';
import styles from '../Swiper/Swiper.module.sass'
import 'swiper/css';
import 'swiper/css/navigation';
import './sliderStyle.sass';

import SliderCard from '../Cards/SliderCards/SliderCard';
import Icon from '../Icon/Icon';

const SwiperBanner = () =>{
    return (
        <div >
            <div className={styles.slider}>
            <div className={styles.slider__navigation}>
                    <div className="swiper-button-prev-u">
                        <Icon name='prev' width='20' height='20' />
                    </div>
                    <div className="swiper-button-next-u">
                        <Icon name='next' width='20' height='20' />
                    </div>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    navigation={{
                        nextEl: '.swiper-button-next-u',
                        prevEl: '.swiper-button-prev-u',
                    }}>
                    <SwiperSlide>
                        <SliderCard title='Сделаем мир чище'
                            text='Сдай макулатуру или старую одежду и получи скидку
                            на покупку товаров из переработанных материалов'
                            image={first_pict}
                            button_content='Условия сервиса'
                            background_color='#B3EDC8' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard title='А вы знали...'
                            text='что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?'
                            image={second_pict}
                            button_content='Узнать больше'
                            background_color='#FFE48F' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderCard title='Что с масками?'
                            text='Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку.'
                            image={third_pict}
                            button_content='Узнать больше'
                            background_color='#BFF0DE' />
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
    )
}
export default SwiperBanner;
