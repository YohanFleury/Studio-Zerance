import React from 'react'
import '../styles/Banniere.css'
export const Banniere = () => {
    const a = "<"
    const b = "/>"
    return (
        <div className="container-fluid banniere1 text-center mt-2 mb-2">
            <div className="banniere2 d-flex flex-column justify-content-center">
                <p className="header-since mb-5"> SINCE 2016</p>
                <h2 className="header-title"> {a}We create from scratch amazing <span className="underline-shopify">Shopify</span>{b} </h2>
            </div>
        </div>
    )
}
