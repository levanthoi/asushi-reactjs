import React from 'react';

const Helmet = (props) => {
    document.title = "Asahi shuhi-" + props.title;
    return <div>{props.children}</div>;
}

export default Helmet;