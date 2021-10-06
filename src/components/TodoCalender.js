import React, { useState } from 'react';
import styled from 'styled-components';
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { Button } from 'react-bootstrap';
import react,{useState} from 'react';
import styled from 'styled-components'


const TodoCalenderContainer = styled.div`

`;

const TodoCalenderHeader = styled.div`
    color:white;
`;

const TodoCalenderTimeContainer = styled.div`
    display: flex;
`;
const TodoCalenderTime = styled.div`
    font-size:52px;
`;

const TodoCalenderTimeContainer = styled.div`
    
`;
const TodoCalenderTime = styled.div`
    

`;


const TodoCalenderDate = styled.div`
    
`;


const TodoCalenderMonth = styled.div`
    display: flex;
    font-size: 40px;
    padding-left: 50%;
`;



const TodoCalender = () =>{

    const [date] = useState(new Date());

    return (
        <TodoCalenderContainer >
            <TodoCalenderHeader>
                <TodoCalenderTimeContainer>
                    <TodoCalenderTime>
                        {date.getFullYear()}&nbsp;.&nbsp;
                        {date.getMonth() + 1}&nbsp;.&nbsp;
                    </TodoCalenderTime>p
                    <TodoCalenderMonth>
                        <Button>
                            <BiArrowToLeft />
                        </Button>
                        <div>{date.getMonth() + 1}</div>
                        <Button>
                            <BiArrowToRight />
                        </Button>
                    </TodoCalenderMonth>
                </TodoCalenderTimeContainer>
                <TodoCalenderDate>
                </TodoCalenderDate>
                    <TodoCalenderMonth></TodoCalenderMonth>
                </TodoCalenderTimeContainer>
                <TodoCalenderDate></TodoCalenderDate>
            </TodoCalenderHeader>
        </TodoCalenderContainer>
    );
};

export default TodoCalender;