import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '../Grid'

import logo from '../../assets/images/logo.png'

const footerAboutLink = [
    {
        display: 'Giới thiệu',
        path: 'about'
    },
    {
        display: 'Liên hệ',
        path: 'about'
    },
    {
        display: 'Tuyển dụng',
        path: 'about'
    },
    {
        display: 'Tin tức',
        path: 'about'
    },
    {
        display: 'Hệ thống cửa hàng',
        path: 'about'
    },
]

const footerCustomerLink = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },

]

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={10}
            >

                <div>
                    <div className="footer__title">
                        <h4>Tổng đài hỗ trợ</h4>
                    </div>

                    <div className="footer__content">
                        <p>Liên hệ đặt hàng <strong>0981377700</strong></p>
                        <p>Thắc mắc đơn hàng <strong>0981377700</strong></p>
                        <p>Góp ý kiến, khiếu nại <strong>0981377700</strong></p>
                    </div>      
                </div>

                <div>
                    <div className="footer__title">
                        <h4> Về MISSOUT</h4>
                    </div>

                    <div className="footer__content">
                        {footerAboutLink.map( (item, index) => (
                            <p key={index}>
                                <Link to={item.path}>
                                    {item.display}
                                </Link>

                            </p>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="footer__title">
                        <h4>Chăm sóc khách hàng</h4> 
                    </div>

                    <div className="footer__content">
                        {
                            footerCustomerLink.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>

                                </p>
                            ))
                        }
                    </div>
                </div>

                <div className='footer__about'>
                        <p>
                            <Link to='/'>
                                <img src={logo} className='footer__logo' alt="logo" />
                            </Link>
                        </p>


                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu
                            người tiêu dùng Việt. Hãy cùng MISSOUT hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                </div>

            </Grid>
        </div>
    </footer>
  )
}

export default Footer
