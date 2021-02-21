import React from "react";

const CustomText = (props) => {
    return(
        <React.Fragment>
            <h1 style={{color: props.color}}>Hello {props.name} {props.num}</h1>
        </React.Fragment>
    );
};

export default CustomText;