import './scroll_custom.css'
import Checkbox from "../../components/ui/checkbox/checkbox";
import ModalButton from "../../components/ui/modal-button/button";
import styles from '../EcoMarket/EcoMarket.module.sass'
import PromoCard from "../../components/PromoCard/PromoCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import { DataItems } from '../../mocks/ProductMock'
import { useState } from 'react';

interface ICategoryProps {
    title: string;
    checked: boolean;
}
const gender: ICategoryProps[] = [
    { title: "Мужской", checked: false },
    { title: "Женский", checked: false },
]

const type: ICategoryProps[] = [
    { title: "Одежда", checked: false },
    { title: "Обувь", checked: false },
    { title: "Аксессуары", checked: false },
]

const brand: ICategoryProps[] = [
    { title: "H&M", checked: false },
    { title: "P&B", checked: false },
    { title: "Adidas", checked: false },
    { title: "Nike", checked: false },
    { title: "Reebok", checked: false },
    { title: "Puma", checked: false },
]


const EcoMarket = () => {
    const [genders, setGenders] = useState(gender);
    const [brands, setBrands] = useState(brand);
    const [types, setTypes] = useState(type);

    const updateData = (id: number, setItems: any, items: ICategoryProps[]) => {
        setItems(
            items.map((item: ICategoryProps, currentId: number) =>
                currentId === id ? { ...item, checked: !item.checked } : item
            )
        )
    }
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
                            {genders.map((gender, id) => (
                                <Checkbox
                                    isChecked={gender.checked}
                                    onChange={() => updateData(id, setGenders, genders)}
                                    label={gender.title}
                                    id={id}
                                />))
                            }
                        </div>
                        <div className={styles.search_type}>
                            <h4>Тип товара</h4>
                            <Checkbox id={3} label="Выбрать все" />
                            {types.map((type, id) => (
                                <Checkbox
                                    isChecked={type.checked}
                                    onChange={() => updateData(id, setTypes, types)}
                                    label={type.title}
                                    id={id}
                                />))
                            }
                        </div>
                        <div className={styles.search_type}>
                            <h4>Брэнд</h4>
                            {
                                brands.map((brand, id) =>
                                    <Checkbox
                                        isChecked={brand.checked}
                                        onChange={() => updateData(id, setBrands, brands)}
                                        label={brand.title}
                                        id={id} />)
                            }
                        </div>
                    </div>
                    <ModalButton text={"Сбросить фильтры"} color={"black"} background={"rgba(62, 80, 114, 0.08)"} width={'100%'} disabled='' onClick='' type='' />
                </div>
                <div className={styles.cards_block}>
                    <div className={styles.card_product}>
                        <PromoCard price='200' />
                    </div>
                    {DataItems.map(item =>
                        <div className={styles.card_product}>
                            <ProductCard price={item.price}
                                brand={item.brand}
                                name={item.nameDesc}
                                category={item.category}
                                picture={item.picture} />
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default EcoMarket;
