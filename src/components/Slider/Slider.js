import React, { useState }from 'react'
import dataSlider from './dataSlider'
import "./../../sass/Style.css"

export default function Slider(){

    const [slideIndex, setSlideIndex] = useState(0);
    const autoMoveSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    setInterval(autoMoveSlide, 3000);
    return(
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return(
                        <div className={slideIndex === index+1 ? "slide active-anim" : "slide"}>
                            <img
                            src={process.env.PUBLIC_URL + `/Img/img${index+1}.jpg`}
                            alt='slider images'
                            />
                        </div>
                    )
                })}
            </div>
    )
}