import React from 'react';
import { ColorConsumer } from '../context/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () =>{
    return (
        <div>
            <h2>색상을 선택하시오</h2>
            
            <ColorConsumer>
            {({actions})=>(
                <div
                style={{display:'flex'}}>
                    {colors.map(color=>(
                        <div
                            key={color}
                            style={{
                                background:color,
                                width:'24px',
                                height:'24px',
                                cursor:'pointer'
                            }}
                            onClick={()=>actions.setColor(color)}
                            onContextMenu={e=>{
                                e.preventDefault();//우클릭 버튼 메뉴가 뜨는것을 무시한다.
                                actions.setSubcolor(color);
                            }}
                        />
                    ))}

            </div>
            )}
            </ColorConsumer>
            <hr/>
        </div>
    )
}

export default SelectColors;