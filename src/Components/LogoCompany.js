import React from 'react'
import Slider from "react-slick";

export default function LogoCompany() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                }
            },
        ]
    };
    return (
        <section className='logo_section py-4'>
            <div className='container'>
                <h2>SUBSIDIARY COMPANIES</h2>
                <Slider style={{
                    position:'relative'
                }} {...settings}>
                    <div className='logo_item'>
                        <img src='./img/logo_1.png' alt='logo1' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_2.png' alt='logo2' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_3.png' alt='logo3' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_4.png' alt='logo4' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_5.png' alt='logo5' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_6.png' alt='logo6' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_1.png' alt='logo1' />
                    </div>
                    <div className='logo_item'>
                        <img src='./img/logo_2.png' alt='logo2' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}
