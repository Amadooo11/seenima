import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./styles.css";
const promoItems = [
    {
        id: 1,
        img: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/297310444_3242156069391360_9057935726036089086_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE000WKWjPdiFRhH5TXOTC1GNuePV_69kcY2549X_r2R4UswBvqUGGwjAjklkw2MXPf1ibe3sX8diZcgj-husGs&_nc_ohc=sPVLCJU-yHsAX8aXbT2&tn=SiTYayinuRRySfQu&_nc_ht=scontent.fcrk2-2.fna&oh=03_AVLMpInYPrHmI6mxNk2tJ2cvvuy9EFPSSaKaK4mcudevDA&oe=6350E3BB"
    },
    {
        id: 2,
        img: "https://www.coolztricks.com/wp-content/uploads/2021/08/E8_r2t-VIAAFpjA.jpg"
    },
    {
        id: 3,
        img: "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/297310444_3242156069391360_9057935726036089086_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE000WKWjPdiFRhH5TXOTC1GNuePV_69kcY2549X_r2R4UswBvqUGGwjAjklkw2MXPf1ibe3sX8diZcgj-husGs&_nc_ohc=sPVLCJU-yHsAX8aXbT2&tn=SiTYayinuRRySfQu&_nc_ht=scontent.fcrk2-2.fna&oh=03_AVLMpInYPrHmI6mxNk2tJ2cvvuy9EFPSSaKaK4mcudevDA&oe=6350E3BB"
    },
    {
        id: 4,
        img: "https://gos3.ibcdn.com/bms-lp-1516256333.gif"
    },
]

const Promosection = () => {
    return (
        <div>
               <Header />
        <div className="buttons">
            <a className="left-button">&#x2770;</a>
            <a className="right-button">&#x2771;</a>
            <div className="promo-slide">
                <div className="promo-section">
                    <Carousel>
                        {promoItems.map(promoItems => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block "
                                        src={promoItems.img}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}
                        
                    </Carousel>
                </div>
            </div>  
        </div>
           <Footer />
        </div>
    );
}

export default Promosection;
