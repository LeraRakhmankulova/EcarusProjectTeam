import first_banner from '../../assets/images/map.svg';
import second_banner from '../../assets/images/reduce.svg';
import styles from './MainPage.module.sass';
import Trail from '../../utils/use-spring/Trail';
import SwiperBanner from '../../components/Swiper/Swiper';
import BannerCard from '../../components/Cards/BannerCard/BannerCard';

const MainPage = () => {
    return (
        <Trail>
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
        </Trail>
    );
};

export default MainPage;