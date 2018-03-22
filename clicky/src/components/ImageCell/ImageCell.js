import React from "react";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const ImageCell = props => (
    <span>
        <img src={props.image} alt="MyImage" />
    </span>
);

export default ImageCell;