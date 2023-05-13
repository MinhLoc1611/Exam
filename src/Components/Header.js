import React from 'react'

export default function Header() {
    return (
        <div className='header' style={{borderBottom:'1px solid #1F3D36', paddingBottom:'10px'}}>
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <img src='./img/logo.svg' alt='logo' width={80} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav mt-3 mt-lg-0 ms-lg-auto flex-column">
                            <div className='d-flex  mx-auto mx-lg-0 ms-lg-auto header_rightTop'>
                                <li>Contact Us</li>
                                <li>E-Catalog</li>
                                <li><i className="fa fa-globe"></i> En</li>
                                <li>Vn</li>
                            </div>
                            <div className='d-flex mx-auto mx-lg-0 ms-lg-auto header_rightBot'>
                                <li>COMPANY</li>
                                <li>BUSINESS</li>
                                <li>PORTFOLIO</li>
                                <li>NEWS</li>
                                <li>CAREERS</li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
