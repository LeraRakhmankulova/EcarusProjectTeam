import {BottomSheet} from 'react-spring-bottom-sheet'
import {FC, useState} from "react"
import styles from '../CustomSheet/CustomSheet.module.sass'
import 'react-spring-bottom-sheet/dist/style.css'
import Checkbox from '../../components/ui/checkbox/checkbox';


interface ICategoryProps {
    title: string;
    checked: boolean;
}

const gender: ICategoryProps[] = [
    {title: "Мужской", checked: false},
    {title: "Женский", checked: false},
]

const type: ICategoryProps[] = [
    {title: "Одежда", checked: false},
    {title: "Обувь", checked: false},
    {title: "Аксессуары", checked: false},
]

const brand: ICategoryProps[] = [
    {title: "H&M", checked: false},
    {title: "P&B", checked: false},
    {title: "Adidas", checked: false},
    {title: "Nike", checked: false},
    {title: "Reebok", checked: false},
    {title: "Puma", checked: false},
]

const allTp: ICategoryProps[] = [
    {title: "Выбрать все", checked: false}
]

const allBr: ICategoryProps[] = [
    {title: "Выбрать все", checked: false}
]

interface Props {
    open: any,
    setOpen: any
}

const AboutService: FC<Props> = ({open, setOpen}) => {
    const [allTypes, setAllTypes] = useState(false);
    const [allBrand, setAllBrand] = useState(false);
    const [genders, setGenders] = useState(gender);
    const [brands, setBrands] = useState(brand);
    const [types, setTypes] = useState(type);
    const [chooseAllTypes, setChooseAllTypes] = useState(allTp)
    const [chooseAllBrands, setChooseAllBrands] = useState(allBr)


    const updateData = (id: number, setItems: any, items: ICategoryProps[]) => {
        setItems(
            items.map((item: ICategoryProps, currentId: number) =>
                currentId === id ? {...item, checked: !item.checked} : item
            )
        )
    }
    const checkAllProducts = (isAllProducts: boolean, setAllProducts: any, setProducts: any, products: ICategoryProps[]) => {
        setAllProducts(!isAllProducts)
        setProducts(
            products.map((product: ICategoryProps) =>
                isAllProducts ? {...product, checked: false} :
                    {...product, checked: true}
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
        <>
            <BottomSheet open={open}
                         header={
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
                         }
                         footer={
                             <div className={styles.buttons}>
                                 <div>
                                     <button className={styles.apply}>Применить</button>
                                 </div>
                                 <div>
                                     <button className={styles.reset} onClick={() => setOpen(!open)}>Сбросить фильтры
                                     </button>
                                 </div>
                             </div>
                         }>

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
                                      }}/>
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
                                      }}/>
                        ))}
                        {
                            brands.map((brand, id) =>
                                <Checkbox
                                    isChecked={brand.checked}
                                    onChange={() => updateData(id, setBrands, brands)}
                                    label={brand.title}
                                    id={id}/>)
                        }
                    </div>

                </div>
            </BottomSheet>
        </>
    );
};

export default AboutService;