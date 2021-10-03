import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import useMediaQuery from 'react-responsive';
import './css/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {

    const isPC = useMediaQuery({
        query: "(min-width:768px)"
    });

    const rowRenderer = useCallback(
        ({ index, key }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}

                />
            )
        },
        [onRemove, onToggle, todos],
    )

    return (
        <List
            className="TodoList"
            width={isPC ? 600 : 1024}
            height={56}
            rowCount={todos.length}
            rowHeight={56}
            rowRenderer={rowRenderer}
            list={todos}

        >

        </List>
    )
}

export default React.memo(TodoList);