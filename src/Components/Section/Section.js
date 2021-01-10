import React from 'react';
import Slider from '../Slider/Slider';
import Textarea from '../TextArea/TextArea';

function Section(props){

   console.log(props.classes)
    const TextforTextarea2 = {heading:'Heading', paragraph:''}

    return(
        <div className={props.classes}>
            <Textarea 
            headingStyle='h1' 
            headingColor={props.headingColor} 
            TextforTextarea={props.TextforTextarea} 
            textAreaParagraphClasses={props.textAreaParagraphClasses} />
            {props.slider 
            ? <Slider/> 
            : null}
            {props.quantityOfTextAreas == '2' 
            ? <Textarea headingStyle='h2' 
            headingColor={props.headingColor} 
            additionalHeadingClass={props.additionalHeadingClass} 
            TextforTextarea={TextforTextarea2} 
            textAreaParagraphClasses={props.textAreaParagraphClasses} />
            : null }
        </div>
    )
}

export default Section