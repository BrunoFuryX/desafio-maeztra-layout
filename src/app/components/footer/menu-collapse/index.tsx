'use client';

import React, { useState } from "react";
import styles from "./menu-collapse.module.scss"

interface MenuCollapse{
    title: string
    items: ItemMenu[]

}

interface ItemMenu{
    link: string
    text: string
}
const MenuCollapse = ({title, items} : MenuCollapse) => {
    const [open, setOpen] = useState(false)


    return <div className={styles.menu}>
        <div className={styles.menu_title} onClick={() => setOpen(!open)}><h5>{title}</h5> <span>+</span></div>
        <ul className={styles.menu_list} aria-hidden={!open}>
            {items.map(item => {return <li className={styles.menu_item}><a href={item.link}>{item.text}</a></li>})}
        </ul>
    </div>
}

export default MenuCollapse