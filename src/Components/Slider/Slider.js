import React, { useEffect, useState } from 'react';
import Svg from '../Svg/Svg';
import SvgTexts from '../Svg/SvgTexts';
import BoxText from '../Box/BoxText';
import Box from '../Box/Box';

function Slider(props){

    const [sliderArrowLeft, setSliderArrowLeft] = useState({})
    const [sliderArrowRight, setSliderArrowRight] = useState({})
    const [showedBoxes, setShowedBoxes] = useState([])

    const sliderArrowStyle = {
        background:'rgba(255, 255, 255, 0.05)',
        borderRadius: 100
    }

    useEffect(() => {
        updateSlider()
    },[])

    const updateSlider = () => {
        if (window.screen.availWidth > 1150 && (showedBoxes.length == 2 || showedBoxes.length == 0)){
            setShowedBoxes([0,1,2])
        }
        if ((window.screen.availWidth <= 1150 && window.screen.availWidth > 720) && (showedBoxes.length == 3 || showedBoxes.length == 1 || showedBoxes.length == 0)){
            setShowedBoxes([0,1])
        }
        if (window.screen.availWidth <=720 && (showedBoxes.length == 2 || showedBoxes.length == 0)){
            setShowedBoxes([0])
        }
        
    }

    const setMobileArrowLeft = () => {
        setSliderArrowLeft(sliderArrowStyle)
        ClickLeftArrowSlider()
    }

    const setMobileArrowRight = () => {
        setSliderArrowRight(sliderArrowStyle)
        ClickRightArrowSlider()
    }

    useEffect(() => {
        window.addEventListener('resize', updateSlider);

        if (window.screen.availWidth <450){
            document.getElementById('sliderArrowLeft').addEventListener( 'click',  setMobileArrowLeft, true)
            document.getElementById('sliderArrowRight').addEventListener('click', setMobileArrowRight, true)
        }

        return () => {
            window.removeEventListener('resize', updateSlider);
            document.getElementById('sliderArrowLeft').removeEventListener( 'click', setMobileArrowLeft, true)
            document.getElementById('sliderArrowRight').removeEventListener('click', setMobileArrowRight, true)
        }
    },[])

    const ClickLeftArrowSlider = () => {
        let newBoxes = []

        showedBoxes.map((boxIndex) => {
            if (boxIndex - 1 < 0){
                newBoxes.push(BoxText.BoxText.SectionBoxes.length - 1)
            } 
            else {
                newBoxes.push(boxIndex - 1)
            }
        })
        setShowedBoxes(newBoxes)
    }

    const ClickRightArrowSlider = () => {
        let newBoxes = []

        showedBoxes.map((boxIndex) => {
            if (boxIndex + 1 >= BoxText.BoxText.SectionBoxes.length){
                newBoxes.push(0)
            }
            else {
                newBoxes.push(boxIndex + 1)
            }
        })
        setShowedBoxes(newBoxes)
    }
    
    return(
        <div 
        className='slider'
        >
            <div
            id='sliderArrowLeft' 
            className='slider__move slider__move--left'
            style={sliderArrowLeft}
            onMouseEnter={() => {setSliderArrowLeft(sliderArrowStyle);ClickLeftArrowSlider()}}
            onMouseLeave={() => {setSliderArrowLeft({})}}>
                <Svg 
                img={SvgTexts.SvgArray[1]}/>
            </div>
            <div 
            className='slider__display'>
                {showedBoxes.map((i)=> {
                    return(
                        <Box
                            paragraphColor='#808080'
                            key={'box'+i}
                            headingColor='#2D3236'  
                            TextforTextarea={BoxText.BoxText.SectionBoxes[i]}
                            headingStyle='h3'
                            textAreaParagraphClasses={props.textAreaParagraphClasses}
                        />
                        )
                })}
            </div>
            <div
            id='sliderArrowRight' 
            style={sliderArrowRight} 
            className='slider__move slider__move--right'
            onMouseEnter={()=> {setSliderArrowRight(sliderArrowStyle);ClickRightArrowSlider()}}
            onMouseLeave={() => {setSliderArrowRight({})}}>
                <Svg 
                img={SvgTexts.SvgArray[2]} />
            </div>
        </div>
    )
}

export default Slider