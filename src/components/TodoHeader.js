import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                    <Link to="/Temp" className="TodoTempLink">TodoTemp</Link >
                    <Link to="/Game" className="TodoGameLink">TodoGame</Link >
                </Nav>

            </Navbar>
        </div >
    )
}

export default TodoHeader;