import React from 'react'
import image1 from '../assets/Artboard_2.jpg'
import image2 from '../assets/Artboard_1.jpg'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Slider.css'


const Slider = () => {
  const a = "<"
  const b = "/>"
    
    return (
    <div id="Slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="container">
                <div className="postit">
                  <h3 className="font-t1">FROM SCRATCH /</h3>
                  
                  <h1 className="font-t2"> seasonly </h1>
                  <p> Développement site from scratch et d'un quiz personnalisé avec abonnement.
                      Développement site from scratch et d'un quiz personnalisé avec abonnement. </p>
                  <h3>  <a href="#" className="font-link text-decoration-none underline">{a}Voir plus{b} </a></h3>
                </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="container">
                <div className="postit">
                  <h3 className="font-t1">FROM SCRATCH /</h3>
                  
                  <h1 className="font-t2"> seasonly </h1>
                  <p> Développement site from scratch et d'un quiz personnalisé avec abonnement.
                      Développement site from scratch et d'un quiz personnalisé avec abonnement. </p>
                  <h3> <span className="underline"> {a}Voir plus{b} </span></h3>
                </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   </div>
 
    )
};
export default Slider;

