import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
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
                    <Link to="/" className="TodoHome">KIMMUMAN`s</Link>
                </Main>
                <div className="content">
                    <Link to="/Temp" className="TodoTempLink">TodoTemp</Link >
                    <Link to="/Game" className="TodoGameLink">TodoGame</Link >
                    <Link to="/News" className="NewsLink">News</Link >
                    <Link to="/Calender" className="TodoCalender">Calender</Link >
                </div>

            </Navbar>
        </div >
    )
}

export default TodoHeader;