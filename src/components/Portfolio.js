import React from 'react'
import '../styles/Portfolio.css'
import yoko from '../assets/yoko.png'


export const Portfolio = () => {
    return (
            <div className="section" id="portfolio">
                <div className="portfolio">
                    <div className="title">
                        <p> NOS CLIENTS SONT GÉNIAUX </p>
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                        <a href="https://yokoshop.com"><img src={yoko} alt="logo-yoko" /></a>
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                    </div>
                    <div className="d-flex justify-content-around mt-5">
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                        <img src={yoko} alt="logo-yoko" />
                    </div>
                </div>
            </div>
    )
}
