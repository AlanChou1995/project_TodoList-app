import styled from "@emotion/styled";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
const TodoCard = styled.div`
    margin-top:50px;
    width:600px;
    border:0.5px solid;
    border-radius:8px;
    background-color: #fff;
`
const Title = styled.h1`
    margin:30px 30px 15px 30px;
    letter-spacing:3px;
`
const UserBox = styled.div`
    margin-left:30px;
    margin-right:30px;    
    margin-bottom:20px;
`
const TodoInput = styled.input`
    width:470px;
    height:34px;
    font-size:24px;
    border:0.5px solid;
    border-radius:8px;
    font-family:'Comic Mono','微軟正黑體';
`
const AddButton = styled.button`
    width:62px;
    height:35px;
    background-color: #fff;
    border:0.5px solid;
    border-radius:8px;
    transition:0.5s;
    :hover {
        color:whitesmoke;
        background-color: #2c2525;
    }
    :active {
        background-color: #6e6e6e;
    }
`
const TodoContent = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:15px 30px;
    border:0.5px solid;
    border-radius:8px;
`
const Todo = styled.div`
    margin:10px 15px;
    font-family:'Comic Mono','微軟正黑體';
    ${props => props.isDone && `
        text-decoration: line-through;
    `}
`
const ButtonGroup = styled.div`
    margin:10px 15px;
`
const StateButton = styled.button`
    width:70px;
    height:30px;
    border-radius:8px;
    color:#438f61;
    background-color:#fff;
    border:0.5px solid #438f61;
    transition:0.5s;
    :hover {
        color:white;
        background-color:#438f61;
    }
    :active {
        background-color:#18462a;
    }
    ${props => props.isDone && `
        color:#4e4e4e;
        background-color:#fff;
        border:0.5px solid #4e4e4e;
        :hover {
            color:white;
            background-color:#4e4e4e;
        }
        :active {
            background-color:#323232;
        }
    `}
`
const DeleteButton = styled.button`
    width:70px;
    height:30px;
    border-radius:8px;
    color:#af3128;
    background-color:#fff;
    border:0.5px solid #af3128;
    transition:0.5s;
    :hover {
        color:white;
        background-color:#af3128;
    }
    :active {
        background-color:#611a15;
    }
`

export {
    Container,
    TodoCard,
    Title,
    UserBox,
    TodoInput,
    TodoContent,
    Todo,
    ButtonGroup,
    AddButton,
    StateButton,
    DeleteButton,
}