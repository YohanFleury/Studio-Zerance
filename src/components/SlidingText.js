import React from 'react'
import "../styles/SlidingText.css"

export const SlidingText = () => {
    return (
            <div className="sliding" id="sliding-text">
                <div className="sliding-text">
                <marquee direction="left" scrollamount="20">Ceci est un texte qui défile // Je suis un développeur passionné par ce qu'il fait // Même si j'ai utilisé la balise marquee ...</marquee>
                </div>
            </div>
    )
}
