import React from 'react'
import TodoNavbar from './TodoNavbar';
import styled from 'styled-components'
import './css/TodoHeader.scss'


const Main = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:32px;
`;

const TodoHeader = () => {

    return (
        <div className="TodoHeader">
            <div className="Header__Content">
                <Main>
                    KIMMUMAN`s
                </Main>
                <TodoNavbar />
            </div>
        </div>
    )
}

export default TodoHeader;