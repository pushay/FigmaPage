import React from 'react';

function Svg(props){
    return(
        <div
        className={props.svgClass ? props.svgClass : null} 
        style={props.styles ? props.styles : {}}
        dangerouslySetInnerHTML={{ __html: props.img }}>
        </div>
    )
}

export default Svg











