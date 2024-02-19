import React from "react";
import Topbar from "./topbar";
import Main from "./main";
import styles from "./header.module.scss"
import Menu from "./menu";

const Header = () => {

    return <div className={styles.header}>
        <Topbar />
        <Main />
        <Menu />
    </div>
}

export default Header