import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon/Icon'
import avatar from '../../assets/images/ava.svg';
import money from '../../assets/images/money.svg';
import styles from '../BottomSheet/BottomSheet.module.sass';
import Checkbox from '../ui/checkbox/checkbox';

interface Props {
    active: any,
    setActive: any
    action: any
}


const BottomSheet: FC<Props> = ({ active, setActive, action }) => {
    const genders = [
        { title: "Мужской", checked: false },
        { title: "Женский", checked: false },
    ]

    const types = [
        { title: "Одежда", checked: false },
        { title: "Обувь", checked: false },
        { title: "Аксессуары", checked: false },
    ]

    const brands = [
        { title: "H&M", checked: false },
        { title: "P&B", checked: false },
        { title: "Adidas", checked: false },
        { title: "Nike", checked: false },
        { title: "Reebok", checked: false },
        { title: "Puma", checked: false },
    ]
    const allBr = [
        { title: "Выбрать все", checked: false }
    ]
    const allTp = [
        { title: "Выбрать все", checked: false }
    ]
    const [chooseAllTypes, setChooseAllTypes] = useState(allTp)
    const [chooseAllBrands, setChooseAllBrands] = useState(allBr)

    return (
        <div className={active ? `${styles.menu_active}` : `${styles.menu}`}>
            <div className={styles.blur}>
                <div className={styles.menu_content}>
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
                    <div className="search_block">
                        <div className={styles.search_type}>
                            <h4>Пол</h4>
                            {genders.map((gender, id) => (
                                <Checkbox
                                    isChecked={gender.checked}

                                    label={gender.title}
                                    id={id}
                                />))
                            }
                        </div>
                        <div className={styles.search_type}>
                            <h4>Тип товара</h4>
                            {chooseAllTypes.map((allTp, id) => (
                                <Checkbox id={id} label={allTp.title} isChecked={allTp.checked}
                                />
                            ))}
                            {types.map((type, id) => (
                                <Checkbox
                                    isChecked={type.checked}

                                    label={type.title}
                                    id={id}
                                />))
                            }
                        </div>
                        <div className={styles.search_type}>
                            <h4>Брэнд</h4>
                            {chooseAllBrands.map((allBr, id) => (
                                <Checkbox id={id} label={allBr.title} isChecked={allBr.checked}
                                />
                            ))}
                            {
                                brands.map((brand, id) =>
                                    <Checkbox
                                        isChecked={brand.checked}
                                        label={brand.title}
                                        id={id} />)
                            }
                        </div>
                    </div>
                    <div className={styles.button_area}>
                        <button className={styles.apply}>Применить</button>
                        <button className={styles.reset}>Сбросить фильтры</button>
                    </div>
                </div>
                <div>
                    <button onClick={action} className={styles.close_menu_button}>
                        <Icon name='close' width={25} height={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BottomSheet;