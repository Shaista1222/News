import React from 'react';

const ImageWithTextOverlay = ({ imageUrl, text }) => {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '900px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const textOverlayStyle = {
        position: 'absolute',
        top: '40%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        padding: '20px',
        borderRadius: '10px'
    };

    return (
        <div style={containerStyle}>
            <div style={textOverlayStyle}>{text}</div>
        </div>
    );
};

export default ImageWithTextOverlay;
