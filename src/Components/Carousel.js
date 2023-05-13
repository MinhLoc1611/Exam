import React from 'react'



export default function Carousel() {

    return (
        <section className='carousel_section'>
            <div className='carousel_div'>
                <div className='carousel_info'>
                    <div id="carousel_control" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./img/carousel_1.png" className='d-block w-100' alt="carousel_1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/carousel_2.png" className='d-block w-100' alt="carousel_2" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/carousel_1.png" className='d-block w-100' alt="carousel_1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/carousel_2.png" className='d-block w-100' alt="carousel_2" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel_control" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel_control" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
