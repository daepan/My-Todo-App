import React from 'react';
import ColorContext from '../context/color';

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {
                value => (
                    <div
                        style={{
                            width: '64px',
                            height: '646px',
                            background: value.color
                        }}
                    ></div>
                )
            }
        </ColorContext.Consumer>
    )
}

export default ColorBox;