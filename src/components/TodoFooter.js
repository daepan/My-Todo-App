import React from 'react'
import './css/TodoFooter.scss';
import styled from 'styled-components'



const Main = styled.div`
    display: flex;
    font-family: 'Gluten-Bold';
    font-size:32px;
`;


const TodoFooter =()=>{
    return (
        <div className="TodoFooter">
            <div className="Footer__Content">
                
                <Main>Director: MurPan</Main>    
                <a className="Title" href="mailto:qw04011@gmail.com">
                <img 
                 src={require("./img/GoogleLogo.png").default} 
                 alt="Google"
                 width='24'
                 height='24'/>
                </a>

            </div>
        </div>
    )
}

export default TodoFooter;