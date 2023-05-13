import React from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <span><i className="fa fa-angle-up"></i></span>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <span><i className="fa fa-angle-down"></i></span>
        </div>
    );
}

export default function Intro() {

    const settingsIntroRight = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    }

    return (
        <section className='intro_section'>
            <div className='intro_top'>
                <div className='intro_info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='intro_item'>
                                    <img src='./img/intro1.png' alt='intro1' />
                                    <div className='intro_content'>
                                        <h3>PORTFOLIO</h3>
                                        <p>Lorem Ipsum Is Simply Dummy Text Of The Website</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div id="intro_control" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item intro_itemSlide active">
                                            <img src='./img/intro2.png' alt='intro2' />
                                            <div className='intro_content'>
                                                <h3>BUSINESS</h3>
                                                <p>Real Estate Investment Osi Holdings Is Real Estate Investment</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item intro_itemSlide">
                                            <img src='./img/slide_02.png' alt='slide02' />
                                            <div className='intro_content'>
                                                <h3>BUSINESS</h3>
                                                <p>Real Estate Investment Osi Holdings Is Real Estate Investment</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item intro_itemSlide">
                                            <img src='./img/slide_04.png' alt='slide03' />
                                            <div className='intro_content'>
                                                <h3>BUSINESS</h3>
                                                <p>Real Estate Investment Osi Holdings Is Real Estate Investment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#intro_control" data-bs-slide="prev">
                                        <span><i className="fa fa-angle-left"></i></span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#intro_control" data-bs-slide="next">
                                        <span><i className="fa fa-angle-right"></i></span>
                                    </button>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='intro_item'>
                                    <img src='./img/intro3.png' alt='intro3' />
                                    <div className='intro_content'>
                                        <h3>CAREERS</h3>
                                        <p>Creativity, Challenge, Professional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='intro_bottom py-5'>
                <div className='intro_news container text-center text-white'>
                    <h2>NEWS</h2>
                    <div className='news_button mt-3'>
                        <button>MARKET <i className="fa fa-angle-right"></i></button>
                        <i style={{ fontSize: "13px" }} className="fa fa-bullseye"></i>
                        <button>MARKET <i className="fa fa-angle-right"></i></button>
                        <i style={{ fontSize: "13px" }} className="fa fa-bullseye"></i>
                        <button>MARKET <i className="fa fa-angle-right"></i></button>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-6'>
                            <div className='news_left mx-2'>
                                <div className='news_left_img'>
                                    <img src='./img/newsLeft.png' alt='newsLeft' />
                                </div>
                                <div className='news_left_content text-start mt-3'>
                                    <button>Project</button>
                                    <span>2022.01.15</span>
                                    <p>Strong demand for large Lawrence Park condo drives up selling price Lorem</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='news_right'>
                                <Slider {...settingsIntroRight}>
                                    <div className='news_rightItem'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='news_rightImg'>
                                                    <img className='img-fluid' src='./img/newsRight1.png' alt='newsRight1' />
                                                </div>
                                            </div>
                                            <div className='col-9'>
                                                <div className='news_rightText'>
                                                    <div>
                                                        <button>Market</button>
                                                        <span>2022.01.15</span>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_rightItem'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='news_rightImg'>
                                                    <img className='img-fluid' src='./img/newsRight2.png' alt='newsRight1' />
                                                </div>
                                            </div>
                                            <div className='col-9'>
                                                <div className='news_rightText'>
                                                    <div>
                                                        <button>Project</button>
                                                        <span>2022.01.15</span>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_rightItem'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='news_rightImg'>
                                                    <img className='img-fluid' src='./img/newsRight3.png' alt='newsRight1' />
                                                </div>
                                            </div>
                                            <div className='col-9'>
                                                <div className='news_rightText'>
                                                    <div>
                                                        <button>Company</button>
                                                        <span>2022.01.15</span>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_rightItem'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='news_rightImg'>
                                                    <img className='img-fluid' src='./img/newsRight1.png' alt='newsRight1' />
                                                </div>
                                            </div>
                                            <div className='col-9'>
                                                <div className='news_rightText'>
                                                    <div>
                                                        <button>Market</button>
                                                        <span>2022.01.15</span>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_rightItem'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='news_rightImg'>
                                                    <img className='img-fluid' src='./img/newsRight2.png' alt='newsRight1' />
                                                </div>
                                            </div>
                                            <div className='col-9'>
                                                <div className='news_rightText'>
                                                    <div>
                                                        <button>Project</button>
                                                        <span>2022.01.15</span>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='news_rightItem'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                <div className='news_rightImg'>
                                                    <img className='img-fluid' src='./img/newsRight3.png' alt='newsRight1' />
                                                </div>
                                            </div>
                                            <div className='col-9'>
                                                <div className='news_rightText'>
                                                    <div>
                                                        <button>Company</button>
                                                        <span>2022.01.15</span>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
