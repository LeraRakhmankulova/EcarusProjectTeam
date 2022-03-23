import { observer } from "mobx-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './scroll_custom.css'
import Checkbox from "../../components/ui/checkbox/checkbox";
import ModalButton from "../../components/ui/modal-button/button";
import styles from '../EcoMarket/EcoMarket.module.sass'
import first_product from '../../assets/images/nike1.png'
import second_product from '../../assets/images/nike2.png'
import third_product from '../../assets/images/nike3.png'
import fourth_product from '../../assets/images/nike4.png'
import fifth_product from '../../assets/images/nike5.png'
import PromoCard from "../../components/PromoCard/PromoCard";
import ProductCard from "../../components/ProductCard/ProductCard";

const EcoMarket = () => {

    return (
        
        <div className={styles.page_wrapper}>
            
            <div className={styles.upper_block_container}>
                <h1>ЭкоМаркет</h1>
                <div>
                    <ul>
                        <li>
                            <a>По популярности</a>
                        </li>
                        <li>
                            <a>По цене</a>
                        </li>
                        <li>
                            <a>По новизне</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.main_content}>
                <div className={styles.search_block_wrapper}>
                    <div className="search_block">
                        <div className={styles.search_type}>
                            <h4>Пол</h4>
                            <Checkbox title="Женский" />
                            <Checkbox title="Мужской" />
                        </div>
                        <div className={styles.search_type}>
                            <h4>Тип товара</h4>
                            <Checkbox title="Выбрать все" />
                            <Checkbox title="Одежда" />
                            <Checkbox title="Обувь" />
                            <Checkbox title="Аксессуары" />
                        </div>
                        <div className={styles.search_type}>
                            <h4>Брэнд</h4>
                            <Checkbox title="H&M" />
                            <Checkbox title="P&B" />
                            <Checkbox title="Adidas" />
                            <Checkbox title="Nike" />
                            <Checkbox title="Reebok" />
                            <Checkbox title="Puma" />
                            <Checkbox title="Adidas" />
                            <Checkbox title="Nike" />
                            <Checkbox title="Reebok" />
                            <Checkbox title="Puma" />
                        </div>
                    </div>
                    <ModalButton text={"Сбросить фильтры"} color={"black"} background={"rgba(62, 80, 114, 0.08)"} width={'100%'} disabled='' onClick='' type='' />
                </div>
                <div className={styles.cards_block}>
                    <div className={styles.card_product}>
                        <PromoCard price='200' />
                   </div>
                    <div className={styles.card_product}>
                        <ProductCard price='1000' brand='NIKE' name='Nike Air Max 2021' category='Мужская обувь' picture={first_product}/>
                    </div>
                    <div className={styles.card_product}>
                        <ProductCard price='750' brand='NIKE' name='Nike Air Max 90 Premium' category='Мужская обувь' picture={second_product}/>
                    </div>

                    <div className={styles.card_product}>
                        <ProductCard price='1200' brand='Adidas' name='Adidas Alphabounce RC' category='Мужская обувь' picture={third_product}/>
                    </div>
                    <div className={styles.card_product}>
                        <ProductCard price='1000' brand='H&M' name='H&M' category='Мужская одежда' picture={fourth_product}/>
                    </div>
                    <div className={styles.card_product}>
                        <ProductCard price='210' brand='NIKE' name='Nike Air Force 1 Low' category='Мужская обувь' picture={fifth_product}/>
                    </div>
                    <div className={styles.card_product}>
                        <ProductCard price='1200' brand='Adidas' name='Adidas Alphabounce RC' category='Мужская обувь' picture={third_product}/>
                    </div>
                    <div className={styles.card_product}>
                        <ProductCard price='1000' brand='H&M' name='H&M' category='Мужская одежда' picture={fourth_product}/>
                    </div>
                    <div className={styles.card_product}>
                        <ProductCard price='210' brand='NIKE' name='Nike Air Force 1 Low' category='Мужская обувь' picture={fifth_product}/>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default EcoMarket;
