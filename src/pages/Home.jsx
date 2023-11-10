import React from 'react'
import Header from "../components/header/Header";
import Carous from "../components/carousel/Carous";
import NowShowing from "../components/now-showing/NowShowing";
import ComingSoon from "../components/coming-soon/ComingSoon";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Carous />
            <NowShowing slidesPerView="6" />
            <ComingSoon slidesPerView="6"/>
            <Footer />
        </div>
    )
}

export default Home;