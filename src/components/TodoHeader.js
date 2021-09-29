import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import './css/TodoHeader.scss';



const Main = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:32px;
`;



const TodoHeader = () => {

    return (
        <div className="TodoHeader">
            <Navbar className="Header__Content">

                <Main>
                    KIMMUMAN`s
                </Main>
                <Nav className="me-auto">
                    <Nav.Link className="TodoTempLink">TodoTemp</Nav.Link>
                    <Nav.Link className="TodoGameLink">TodoGame</Nav.Link>
                </Nav>

            </Navbar>
        </div >
    )
}

export default TodoHeader;