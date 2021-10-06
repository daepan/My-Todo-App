import React, { useState } from "react";
import styled from "styled-components";
import './css/Clock.scss'

const TodoDate = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:20px;
`;

const TodoDay = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:20px;
`;

const TodoTime = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:20px;
`;


const Clock = () => {
    const [date] = useState(new Date());
    return (
        <div className="Clock__Container">
            <TodoDate>
                {date.getFullYear()}&nbsp;/&nbsp;
                {date.getMonth() + 1}&nbsp;/&nbsp;
                {date.getDate()}
            </TodoDate>
            <TodoDay>
                {date.getDay() === 0
                    ? "Sunday"
                    : date.getDay() === 1
                        ? "Monday"
                        : date.getDay() === 2
                            ? "Tuesday"
                            : date.getDay() === 3
                                ? "wednesday"
                                : date.getDay() === 4
                                    ? "Thursday"
                                    : date.getDay() === 5
                                        ? "Friday"
                                        : "Saturday"}
            </TodoDay>
            <TodoTime>
                {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}
                &nbsp;:&nbsp;
                {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
            </TodoTime>
        </div>
    )
}

export default Clock;