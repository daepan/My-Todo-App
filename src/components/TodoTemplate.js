import React from 'react';
import './css/TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">김머판의 하루 일과</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate