import { useContext } from "react";
import { TodosContext } from "context/todos";

const Main = () => {
    const [todosState, dispatch] = useContext(TodosContext);
    console.log('todosState', todosState)
    const noTodosClass = todosState.todos.length === 0 ? 'hidden' : '';
    const getVisibleTodos = () => {
        if (todosState.filter === 'active') {
            return todosState.todos.filter(todo => !todo.isCompleted)
        } else if (todosState.filter === 'completed') {
            return todosState.todos.filter(todo => todo.isCompleted)
        }
        return todosState.todos;
    }
    const isAllTodosSelected = todosState.todos.every((todo) => todo.isCompleted)
    const onToggleAllTodos = event => {
        dispatch({type: 'toggleAll', payload: event.target.checked})
    }
    const visibleTodos = getVisibleTodos()
    return (
        <section className={`main ${noTodosClass}`}>
            <input id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={isAllTodosSelected}
                onChange={onToggleAllTodos}
            />
            <label htmlFor="toggle-all">Mark all as completed</label>
            <ul className="todo-list">
                {visibleTodos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </section>
    )
}
export default Main;