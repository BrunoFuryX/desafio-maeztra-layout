import React from "react";
import styles from "./banner.module.scss"
import Image from "next/image";

const Banner = () => {
    
    return <div className={styles.banner}>
        <div className={styles.container}>
            
            <div className={styles.texts}>
                <h2>
                    Lorem ipsum 
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
                </p>
            </div>
            <div className={styles.image}>
                <Image src={"/images/banner1.png"} alt="Banner nova coleção" width={1114} height={684}/>
            </div>
        </div>
    </div>
}

export default Banner