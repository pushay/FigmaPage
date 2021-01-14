import React from 'react';
import TextArea from '../TextArea/TextArea';
import SvgTexts from '../Svg/SvgTexts';

function Box(props){
    return(
        <div className="box">
            <TextArea
            paragraphColor={props.paragraphColor}
            headingColor={props.headingColor}
            TextforTextarea={props.TextforTextarea}
            headingStyle={props.headingStyle}
            textAreaParagraphClasses={props.textAreaParagraphClasses}
            />
        </div>
    )
}

export default Box