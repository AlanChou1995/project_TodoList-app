import {
    TodoContent,
    Todo,
    ButtonGroup,
    StateButton,
    DeleteButton,
} from './styled';

const TodoItem = ({ todo, handleDeleteClick, handleStateClick }) => {
    const handleTogglerClick = () => {
        handleStateClick(todo.id)
    };
    const handleDeleteTodo = () => {
        handleDeleteClick(todo.id)
    };
    return (
        <TodoContent data-todo-id={todo.id}>
            <Todo isDone={todo.isDone}>{todo.inputValue}</Todo>
            <ButtonGroup>
                <StateButton isDone={todo.isDone} onClick={handleTogglerClick}>
                    {
                        todo.isDone ? 'Undone' : 'Done'
                    }
                </StateButton>
                <DeleteButton onClick={handleDeleteTodo}>Delete</DeleteButton>
            </ButtonGroup>
        </TodoContent>
    )
}

export default TodoItem
    ;