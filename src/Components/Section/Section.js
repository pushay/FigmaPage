import React from 'react';
import Slider from '../Slider/Slider';
import Textarea from '../TextArea/TextArea';
import Box from '../Box/Box';
import BoxText from '../Box/BoxText';

function Section(props){

    return(
        <div className={props.classes}>
            <Textarea 
            headingStyle='h1' 
            headingColor={props.headingColor} 
            TextforTextarea={props.TextforTextarea} 
            textAreaParagraphClasses={props.textAreaParagraphClasses}/>
            {props.slider 
            ? <Slider
            textAreaParagraphClasses={props.additionalHeadingClass}
            />
            : null}
            {props.quantityOfTextAreas == '2' 
            ? <Textarea headingStyle='h2' 
            headingColor={props.headingColor} 
            additionalHeadingClass={props.additionalHeadingClass} 
            TextforTextarea={BoxText.BoxText.HeadingText[1]} 
            textAreaParagraphClasses={props.textAreaParagraphClasses}/>
            : null }
            {props.boxes ? 
            <div className='section__boxes'>
                {BoxText.BoxText.SectionBoxes.map((boxText, index)=> {
                    if (index > 2){
                        return null
                    }
                    return(
                        <Box
                        paragraphColor='#808080'
                        key={boxText+index}
                        headingColor='#2D3236'  
                        TextforTextarea={boxText}
                        headingStyle='h3'
                        textAreaParagraphClasses={props.additionalHeadingClass}
                        />
                    )
                })}
            </div>
            : null
            }
            <div className='section__dot'>
            </div>
        </div>
    )
}

export default Section