'use client';
import React from "react";
import styles from "./showcase.module.scss"
import Image from "next/image";
import Slider from "react-slick";
import "./slick.scss";

function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="#353535" />
            </svg>

        </div>
    );
}

function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="#353535" />
            </svg>

        </div>
    );
}

const Showcase = () => {
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
                    arrows: false,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    arrows: false,

                }
            }
        ]
    };
    return <div className={styles.showcase}>
        <div className={styles.container}>
            <h4>As Mais Pedidas</h4>
            <Slider {...settings} className={styles.slick}>

                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image src={"./images/product1.png"} alt="imagem produto" width={308} height={465} />
                    </div>
                    <div className={styles.colors}>
                        <div className={styles.beje}></div>
                        <div className={styles.salmao}></div>
                        <div className={styles.azul}></div>
                        <div className={styles.marinho}></div>
                    </div>
                    <span className={styles.prices}>
                        <p>R$ 500,00</p>
                    </span>
                    <h3 className={styles.name}>Faux Suede Mini Skirt</h3>
                    <p className={styles.descriptions}>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <button className={styles.buy}>Adicionar</button>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image src={"./images/product1.png"} alt="imagem produto" width={308} height={465} />
                    </div>
                    <div className={styles.colors}>
                        <div className={styles.beje}></div>
                        <div className={styles.salmao}></div>
                        <div className={styles.azul}></div>
                        <div className={styles.marinho}></div>
                    </div>
                    <span className={styles.prices}>
                        <p>R$ 500,00</p>
                    </span>
                    <h3 className={styles.name}>Faux Suede Mini Skirt</h3>
                    <p className={styles.descriptions}>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <button className={styles.buy}>Adicionar</button>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image src={"./images/product1.png"} alt="imagem produto" width={308} height={465} />
                    </div>
                    <div className={styles.colors}>
                        <div className={styles.beje}></div>
                        <div className={styles.salmao}></div>
                        <div className={styles.azul}></div>
                        <div className={styles.marinho}></div>
                    </div>
                    <span className={styles.prices}>
                        <p>R$ 500,00</p>
                    </span>
                    <h3 className={styles.name}>Faux Suede Mini Skirt</h3>
                    <p className={styles.descriptions}>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <button className={styles.buy}>Adicionar</button>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image src={"./images/product1.png"} alt="imagem produto" width={308} height={465} />
                    </div>
                    <div className={styles.colors}>
                        <div className={styles.beje}></div>
                        <div className={styles.salmao}></div>
                        <div className={styles.azul}></div>
                        <div className={styles.marinho}></div>
                    </div>
                    <span className={styles.prices}>
                        <p>R$ 500,00</p>
                    </span>
                    <h3 className={styles.name}>Faux Suede Mini Skirt</h3>
                    <p className={styles.descriptions}>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <button className={styles.buy}>Adicionar</button>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image src={"./images/product1.png"} alt="imagem produto" width={308} height={465} />
                    </div>
                    <div className={styles.colors}>
                        <div className={styles.beje}></div>
                        <div className={styles.salmao}></div>
                        <div className={styles.azul}></div>
                        <div className={styles.marinho}></div>
                    </div>
                    <span className={styles.prices}>
                        <p>R$ 500,00</p>
                    </span>
                    <h3 className={styles.name}>Faux Suede Mini Skirt</h3>
                    <p className={styles.descriptions}>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <button className={styles.buy}>Adicionar</button>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Image src={"./images/product1.png"} alt="imagem produto" width={308} height={465} />
                    </div>
                    <div className={styles.colors}>
                        <div className={styles.beje}></div>
                        <div className={styles.salmao}></div>
                        <div className={styles.azul}></div>
                        <div className={styles.marinho}></div>
                    </div>
                    <span className={styles.prices}>
                        <p>R$ 500,00</p>
                    </span>
                    <h3 className={styles.name}>Faux Suede Mini Skirt</h3>
                    <p className={styles.descriptions}>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <button className={styles.buy}>Adicionar</button>
                </div>
            </Slider>

        </div>
    </div>
}

export default Showcase