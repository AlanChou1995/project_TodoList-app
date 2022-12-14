import React from 'react';
import "./App.css"
import {
    Container,
    TodoCard,
    Title,
    UserBox,
    TodoInput,
    AddButton,
} from './components/styled';
import { useState, useRef, useEffect } from 'react'
import TodoItem from './components/TodoItem'


const App = () => {
    const id = useRef(2);
    const [todos, setTodos] = useState(() => {
        let todoData = localStorage.getItem('todos') || '';
        if (todoData) {
            todoData = JSON.parse(todoData);
            id.current = todoData[0].id + 1;
        }
        if (!todoData) {
            return [{ id: 1, inputValue: 'Todos...', isDone: false }]
        }
        return todoData;
    });
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    const handleInputChange = (even) => {
        setInputValue(even.target.value);
    }
    const handleAddClick = () => {
        if (inputValue === '') {
            alert('Please add todo')
        } else {
            setTodos([{
                id: id.current,
                inputValue: inputValue,
            }, ...todos,])
            setInputValue('');
            id.current++;
        }
    }
    const handleDeleteClick = id => {
        if (todos.length > 1) {
            setTodos(todos.filter(todo => todo.id !== id))
        } else {
            alert('You must add at least one todo !')
        }
    }
    const handleStateClick = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                isDone: !todo.isDone
            }
        }))
    }
    return (
        <Container>
            <TodoCard>
                <Title>Simple Todo List</Title>
                <UserBox>
                    <TodoInput placeholder='Text' onChange={handleInputChange} value={inputValue} />
                    <AddButton onClick={handleAddClick}>Add</AddButton>
                </UserBox >
                {
                    todos.map(
                        todo =>
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                handleDeleteClick={handleDeleteClick}
                                handleStateClick={handleStateClick}
                            />
                    )
                }
            </TodoCard >
        </Container >
    )
}
export default App