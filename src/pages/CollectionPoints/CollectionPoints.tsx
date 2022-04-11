import Map from '../../components/Map/Map';
import styles from '../CollectionPoints/CollectionPoints.module.sass';
import cardInfo from '../../assets/images/mapCard.svg'
import MapCard from '../../components/Cards/MapCard/MapCard';
import MapCardPlug from '../../components/Plugs/MapCardPlug/MapCardPlug';
import { useEffect, useState } from 'react';
import filter_logo from '../../assets/images/filter_logo.svg'


const CollectionPoints = () => {
    const [isShow, setShow] = useState(false);
    const [openCards, setOpenCards] = useState(false)
    const [menuActive, setMenuActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(() => true)
        }, 2000);
    }, [])
    function handleFilters() {
        return
    }
    return (
        <div>
            <div className={styles.main_content}>
                <input placeholder='Поиск' className={styles.input} />
                <div className={styles.select_wrapper}>
                    <select className={styles.select_shop}>
                        <option value="" disabled selected>Выбрано 3 магазина</option>
                        <option>Пункт 1</option>
                    </select>
                    <select className={styles.select_material}>
                        <option value="" disabled selected>Материалы</option>
                        <option>Пункт 1</option>
                    </select>
                    <button className={styles.button_open_filters} onClick={handleFilters}><img src={filter_logo}/></button>
                </div>
                <button className={styles.button_open_cards} onClick={()=>setMenuActive(!menuActive)}>Показать 12 пунктов сбора</button>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...'/> :
                                    <MapCardPlug/>
                            }

                        </div>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Стекло, бумага, металл, старая одежда, батареи'/> :
                                    <MapCardPlug/>
                            }

                        </div>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Пластик, стекло, бумага, металл'/> : <MapCardPlug/>
                            }

                        </div>
                        <div className={styles.card}>
                            {
                                isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                                                  description='Стекло, бумага, металл, старая одежда, батареи'/> :
                                    <MapCardPlug/>
                            }
                        </div>
                    </div>
                {menuActive ?
                    <div className={styles.cards_phone}>
                        <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...'/> :
                    <MapCardPlug/>
                }

                    </div>
                    <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Стекло, бумага, металл, старая одежда, батареи'/> :
                    <MapCardPlug/>
                }

                    </div>
                    <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Пластик, стекло, бумага, металл'/> : <MapCardPlug/>
                }

                    </div>
                    <div className={styles.card_ph}>
                {
                    isShow ? <MapCard picture={cardInfo} address='ул.Кремлёвская, 88'
                    description='Стекло, бумага, металл, старая одежда, батареи'/> :
                    <MapCardPlug/>
                }
                    </div>
                </div> : <div></div>}
            </div>
            <Map></Map>
        </div>
    );
};

export default CollectionPoints;
