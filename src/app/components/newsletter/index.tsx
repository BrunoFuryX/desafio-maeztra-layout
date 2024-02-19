import React from "react";
import styles from "./newsletter.module.scss"

const Newsletter = () => {
    
    return <div className={styles.newsletter}>
        <div className={styles.container}>
            <h3>Recebe Nossa Newsletter</h3>
            <form action="#">
                <input type="email" name="email" id="newsletterEmail" placeholder="Digite seu e-mail" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
}

export default Newsletter