import React from 'react'
import styled from 'styled-components'
import './css/TodoHeader.scss'


const Main = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:32px;
`;

const TodoHeader=()=>{
    
    return(
        <div className="TodoHeader">
            <div className="Header__Content">
                <Main>
                    KIMMUMAN`s
                </Main>
                <nav>
                Coming Soon
                </nav>
            </div>
        </div>
    )
}

export default TodoHeader;