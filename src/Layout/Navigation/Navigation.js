import React from 'react';
import Svg from '../../Components/Svg/Svg';
import SvgText from '../../Components/Svg/SvgTexts';

function Navigation(){

    const svgStyles = {marginLeft : '372px'}

    return(
        <div className="navigation">
            <Svg
            svgClass='svg' 
            img={SvgText.SvgArray[0]} 
            styles={svgStyles} />
        </div>
    )
}

export default Navigation