import React from 'react'

export default function Footer() {
    return (
        <footer className='footer py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 ms-md-0 ms-3'>
                        <div className='row'>
                            <div className='col-3 footer_logo'>
                                <img src='./img/logo.svg' alt='logo' />
                            </div>
                            <div className='col-9 footer_textLeft text-white'>
                                <h5>ORIENT SUCCESS INTERNATIONAL INVESTMENT JSC., ( OSI HOLDINGS )</h5>
                                <h6>The Intergrated Property Developer</h6>
                                <div className='d-flex'>
                                    <i className="fa fa-map-marker-alt d-block"></i>
                                    <p className='ms-2'>3Rd Floor, NO1 - T4 Office Building, Diplomatic Corps Urban Area, Hoang Minh Thao Street, Bac Tu Liem District, Hanoi</p>
                                </div>
                                <p><i className="fa fa-phone"></i> +(84) 243.207.72.72 - <i className="far fa-envelope"></i> info@osi.com.vn - <i className="fa fa-globe"></i> www.osi.com.vn</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 mt-4 mt-lg-0'>
                        <div className='row text-white ms-3'>
                            <div className='col-3 footer_rightText'>
                                <p>COMPANY</p>
                                <p>BUSINESS</p>
                                <p>PORTFOLIO</p>
                                <p>NEWS</p>
                                <p>CAREERS</p>
                            </div>
                            <div className='col-9 text-end footer_right'>
                                <button>CONTACT US  <i className="fa fa-angle-right"></i></button>
                                <div className='footer_iconRight'>
                                    <span><i className="fab fa-facebook-f"></i></span>
                                    <span><i className="fab fa-youtube"></i></span>
                                    <span><i className="fab fa-medium"></i></span>
                                    <span><i className="fa fa-globe"></i></span>
                                    <p>&copy; OSI Holdings Corporation, All Hights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
