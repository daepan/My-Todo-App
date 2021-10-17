import React, { useState } from 'react';
import styled from 'styled-components';
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

import { Button } from 'react-bootstrap';


const TodoCalenderContainer = styled.div`

`;

const TodoCalenderHeader = styled.div`
    color:white;
    margin:50px;
`;

const TodoCalenderTimeContainer = styled.div`
    display: flex;
    justify-content:space-between;

`;
const TodoCalenderTime = styled.div`
    font-size:52px;
`;





const TodoCalenderMonth = styled.div`
    display: flex;
    font-size: 40px;
`;


const TodoCalender = () => {
    const [date] = useState(new Date());





const TodoCalender = () =>{

    const [date] = useState(new Date());
    const TodoCalenderDateFunction = () => {
        const result = [];
        const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
          for (let i = 0; i < weekArr.length; i++) {
            result.push(<TodoCalenderDate key={i}>{weekArr[i]}</TodoCalenderDate>)
        }
        return result;
    }

   
    return (
        <TodoCalenderContainer >
            <TodoCalenderHeader>
                <TodoCalenderTimeContainer>
                    <TodoCalenderTime>
                        {date.getFullYear()}&nbsp;년&nbsp;
                        {date.getMonth() + 1}&nbsp;월&nbsp;
                    </TodoCalenderTime>
                    <TodoCalenderMonth>
                        <div className="leftMonth">
                            <BiArrowToLeft />
                        </div>
                        <div>{date.getMonth() + 1}&nbsp;월&nbsp;</div>
                        <div className="nextMonth">
                            <BiArrowToRight />
                        </div>
                    </TodoCalenderMonth>
                </TodoCalenderTimeContainer>
                <div>
                    {TodoCalenderDateFunction()}
                </div>
            </TodoCalenderHeader>
        </TodoCalenderContainer>
    );
};

export default TodoCalender;