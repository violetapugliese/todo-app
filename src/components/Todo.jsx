import { useState, useContext, useRef, useEffect } from "react";
import { TodosContext } from "context/todos";
import { enterCode, escCode } from "helpers/keycodes";

const Todo = ({ todo, isEditing, setEditingId }) => {
    const [, dispatch] = useContext(TodosContext);
    const [editText, setEditText] = useState(todo.text);
    const editingClass = isEditing ? "editing" : "";
    const completedClass = todo.isCompleted ? 'completed' : "";
    const editInputEl = useRef(null);
    const setTodoInEditingMode = () => {
        setEditingId(todo.id);
    }
    const changeEditInput = (e) => {
        setEditText(e.target.value);
    }
    const toggleTodo = () => {
        dispatch({ type: 'toggleTodo', payload: todo.id })
    }
    const removeTodo = () => {
        dispatch({ type: 'removeTodo', payload: todo.id })
    }
    const keyDownEditInput = event => {
        if (event.keyCode === enterCode) {
            dispatch({
                type: 'changeTodo',
                payload: { id: todo.id, text: event.target.value },
            })
            setEditingId(null);
        }
        if (event.keyCode === escCode) {
            setEditText(todo.text);
            setEditingId(null);
        }
    }

    useEffect(() => {
       if (isEditing) {
           editInputEl.current.focus()
       }
    });

    return (
        <li className={`${editingClass} ${completedClass}`}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    value={todo.isCompleted}
                    onChange={toggleTodo}
                />
                <label
                    onDoubleClick={setTodoInEditingMode}
                >
                    {todo.text}
                </label>
                <button
                    className="destroy"
                    onClick={removeTodo}
                >
                </button>
            </div>
            {isEditing &&
                <input
                    ref={editInputEl}
                    className="edit"
                    value={editText}
                    onChange={changeEditInput}
                    onKeyDown={keyDownEditInput} />
            }
        </li>
    )
}
export default Todo;
