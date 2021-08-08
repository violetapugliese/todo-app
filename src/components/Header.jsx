import { useState, useContext} from "react";
import { enterCode } from "helpers/keycodes";
import { TodosContext } from "context/todos";
const Header = () => {
    const [text, setText] = useState("");
    const [, dispatch] = useContext(TodosContext)
    const changeText = event => {
        setText(event.target.value);
    }
    const keydownText = (event) => {
        const isEnter = event.keyCode === enterCode; 
        const newText = text.trim();
        const isTextPresent = newText.length > 0 ;
        if(isEnter && isTextPresent) {
            dispatch({type: 'addTask', payload: newText});
            setText("");
        }
    }
    return (
        <header className="header">
            <h1>To-do</h1>
            <input
                className="new-todo"
                placeholder="Add to list"
                autoFocus
                value={text}
                onChange={changeText}
                onKeyDown={keydownText}
            />
        </header>
    )
}

export default Header;