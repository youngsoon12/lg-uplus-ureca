import React from 'react';

const FancyBorder = (props:any) => {
    return (
        <div className={"FancyBorder FancyBorder-"+ props.color}>
            {props.children}
        </div>
    );
};

export default FancyBorder;