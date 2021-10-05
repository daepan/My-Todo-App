import react,{useState} from 'react';
import styled from 'styled-components'

const TodoCalenderContainer = styled.div`

`;

const TodoCalenderHeader = styled.div`
    color:white;
`;

const TodoCalenderTimeContainer = styled.div`
    
`;
const TodoCalenderTime = styled.div`
    
`;


const TodoCalenderDate = styled.div`
    
`;


const TodoCalenderMonth = styled.div`
    
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
                    </TodoCalenderTime>
                    <TodoCalenderMonth></TodoCalenderMonth>
                </TodoCalenderTimeContainer>
                <TodoCalenderDate></TodoCalenderDate>
            </TodoCalenderHeader>
        </TodoCalenderContainer>
    );
};

export default TodoCalender;