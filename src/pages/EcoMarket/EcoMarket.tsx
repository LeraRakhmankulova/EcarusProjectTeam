import './scroll_custom.css'
import Checkbox from "../../components/ui/checkbox/checkbox";
import ModalButton from "../../components/ui/modal-button/button";
import styles from '../EcoMarket/EcoMarket.module.sass'
import { DataItems } from '../../stores/productStore'
import { useEffect, useState } from 'react';
import Trail from '../../utils/use-spring/Trail';
import ProductCardPlug from '../../components/Plugs/ProductCardPlug/ProductCardPlug';
import ProductCard from '../../components/Cards/ProductCard/ProductCard';
import PromoCard from '../../components/Cards/PromoCard/PromoCard';
import CustomSheet from '../../components/CustomSheet/CustomSheet';
import { gender, type, brand, allTp, allBr, ICategoryProps } from '../../stores/marketStore'

const EcoMarket = () => {
    const [open, setOpen] = useState(false)
    const [allTypes, setAllTypes] = useState(false);
    const [allBrand, setAllBrand] = useState(false);
    const [genders, setGenders] = useState(gender);
    const [brands, setBrands] = useState(brand);
    const [types, setTypes] = useState(type);
    const [chooseAllTypes, setChooseAllTypes] = useState(allTp)
    const [chooseAllBrands, setChooseAllBrands] = useState(allBr)
    const [isShow, setShow] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShow(() => true)
        }, 2000);
    }, [])

    const updateData = (id: number, setItems: any, items: ICategoryProps[]) => {
        setItems(
            items.map((item: ICategoryProps, currentId: number) =>
                currentId === id ? { ...item, checked: !item.checked } : item
            )
        )
    }
    const checkAllProducts = (isAllProducts: boolean, setAllProducts: any, setProducts: any, products: ICategoryProps[]) => {
        setAllProducts(!isAllProducts)
        setProducts(
            products.map((product: ICategoryProps) =>
                isAllProducts ? { ...product, checked: false } :
                    { ...product, checked: true }
            )
        )
    }
    const resetFilters = () => {
        setAllTypes(false)
        setAllBrand(false)
        setGenders(gender)
        setBrands(brand)
        setTypes(type)
        setChooseAllTypes(allTp)
        setChooseAllBrands(allBr)
    }
    return (
        <Trail>
            <div className={styles.container}>
                <div className={styles.page_wrapper}>
                    <div className={styles.upper_block_container}>
                        <h1>ЭкоМаркет</h1>
                        <div className={styles.links}>
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
                    <div className={styles.hidden_button}>
                        <button className={styles.filters_button} onClick={() => setOpen(!open)}>
                            Фильтры
                        </button>
                    </div>
                    <CustomSheet open={open} setOpen={setOpen} />
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
                                    {chooseAllTypes.map((allTp, id) => (
                                        <Checkbox id={id} label={allTp.title} isChecked={allTp.checked}
                                            onChange={() => {
                                                updateData(id, setChooseAllTypes, chooseAllTypes);
                                                checkAllProducts(allTypes, setAllTypes, setTypes, types)
                                            }} />
                                    ))}
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
                                    {chooseAllBrands.map((allBr, id) => (
                                        <Checkbox id={id} label={allBr.title} isChecked={allBr.checked}
                                            onChange={() => {
                                                updateData(id, setChooseAllBrands, chooseAllBrands);
                                                checkAllProducts(allBrand, setAllBrand, setBrands, brands)
                                            }} />
                                    ))}
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
                            <ModalButton text={"Сбросить фильтры"} color={"black"}
                                background={"rgba(62, 80, 114, 0.08)"}
                                width={'100%'} disabled='' onClick={() => resetFilters()} type='' />
                        </div>
                        <div className={styles.cards_block}>
                            <div className={styles.card_product}>
                                <PromoCard price='200' />
                            </div>
                            {isShow ?
                                (DataItems.map(item =>
                                    <div className={styles.card_product}>
                                        <ProductCard price={item.price}
                                            brand={item.brand}
                                            name={item.nameDesc}
                                            category={item.category}
                                            picture={item.picture} />
                                    </div>)) :
                                (DataItems.map(item =>
                                    <div className={styles.card_product}>
                                        <ProductCardPlug />
                                    </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </Trail>
    );
};

export default EcoMarket;
