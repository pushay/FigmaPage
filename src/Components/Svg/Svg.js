import React from 'react';

function Svg(props){
    return(
        <div 
        style={props.styles ? props.styles : ''} 
        dangerouslySetInnerHTML={{ __html: props.img }}>
        </div>
    )
}

export default Svg