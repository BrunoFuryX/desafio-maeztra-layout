'use client';
import React from "react";
import styles from "./brands.module.scss"
import Slider from "react-slick";
import Image from "next/image";
import "./slick.scss";

const Brands = () => {
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return <div className={styles.brands}>
        <div className={styles.container}>
            <h4>Marcas Parceiras</h4>
            <Slider {...settings} className={styles.slick}>
                <div className={styles.item}>
                    <Image src="./images/brand-01.png" alt="brand image" width={298} height={62}/>
                </div>
                <div className={styles.item}>
                    <Image src="./images/brand-02.png" alt="brand image" width={298} height={62}/>
                    
                </div>
                <div className={styles.item}>
                    <Image src="./images/brand-03.png" alt="brand image" width={298} height={62}/>
                    
                </div>
                <div className={styles.item}>
                    <Image src="./images/brand-04.png" alt="brand image" width={298} height={62}/>
                </div>
                <div className={styles.item}>
                    <Image src="./images/brand-05.png" alt="brand image" width={298} height={62}/>
                </div>
            </Slider>
        </div>
    </div>
}

export default Brands