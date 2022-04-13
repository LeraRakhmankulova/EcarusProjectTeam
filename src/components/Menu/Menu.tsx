import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon/Icon'
import avatar from '../../assets/images/ava.svg';
import money from '../../assets/images/money.svg';
import styles from '../Menu/Menu.module.sass'

interface Props {
    items: any
    active: any,
    setActive: any
    action: any
}

const Menu: FC<Props> = ({ items, active, setActive, action }) => {
    return (
        <div className={active? `${styles.menu_active}` : `${styles.menu}`}>
            <div className={styles.blur}>
                <div className={styles.menu_content}>
                    <ul>
                        <li>
                            <div className={styles.user}>
                                <div>
                                    <img src={avatar}></img>
                                </div>
                                <div className={styles.name}>
                                    Алексей Петрович
                                    <div className={styles.money}>
                                        <img src={money} width={22}></img>
                                        <h5>1000</h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {items.map((el: any) =>
                            <li>
                                <NavLink to={el.href} onClick={action}>{el.value}</NavLink>
                            </li>)}
                            <li>
                                <NavLink to=''>Выйти</NavLink>
                            </li>
                        {/* <li>
                            <div className={styles.button_wrapp}>
                                <NavLink to='/'>
                                </NavLink>
                            </div>
                        </li> */}
                    </ul>
                    <div>
                        <button onClick={action} className={styles.close_menu_button}>
                            <Icon name='close' width={25} height={25}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;