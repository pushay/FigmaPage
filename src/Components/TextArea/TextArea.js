import React from 'react';
import Svg from '../Svg/Svg';

function TextArea(props){

    const renderHeadingSwitch = () => {
        switch(props.headingStyle){
            case 'h1':
                return <h1 style={{color:props.headingColor}}
                className='textArea__heading textArea__heading--primary'>
                    {props.TextforTextarea.heading}
                    </h1>
            case 'h2':
                return <h2 className='textArea__heading textArea__heading--secondary'>
                    {props.TextforTextarea.heading}
                    </h2>
            case 'h3':
                return <h3 className='textArea__heading textArea__heading--tertiary'>
                    {props.TextforTextarea.heading}
                    </h3>
            default:
                return null
        }
    }

    
    return(
        <div className='textArea'>
            {(props.TextforTextarea.heading)
            ? renderHeadingSwitch() 
            : null}
            {props.TextforTextarea.paragraph 
            ? <p
            style={{color:props.paragraphColor ? props.paragraphColor : props.headingColor}}
            className={props.textAreaParagraphClasses}>{props.TextforTextarea.paragraph}</p>
            : null }
            {props.TextforTextarea.svg != ''
            ? <Svg 
            img={props.TextforTextarea.svg}/> 
            : null}
        </div>
    )
}

export default TextArea