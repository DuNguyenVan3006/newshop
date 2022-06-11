import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './header/Header'
import Routes1 from '../routes/Routes1'
import Footer from './footer/Footer'

const Layouts = () => {

    return (
        <Router>
            <div>
                <Header/>
                <div className="container">
                    <div className="main">
                        <Routes1/>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    )

}

export default Layouts