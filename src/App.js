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
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import TodoItem from './components/TodoItem'

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, inputValue: 'Todo...', isDone: false },
    ]);
    const [inputValue, setInputValue] = useState('');
    const id = useRef(2);
    useLayoutEffect(() => {
        const todoData = JSON.parse(localStorage.getItem('todos')) || '';
        if (todoData) {
            setTodos(todoData)
        }
    }, []);
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
        setTodos(todos.filter(todo => todo.id !== id))
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