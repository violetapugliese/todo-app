import { createContext, useReducer } from "react";

const initialState = {
  todos: [],
  filter: "all",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": {
      const newTask = {
        id: Math.random().toString(16),
        text: action.payload,
        isCompleted: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTask],
      };
    }
    case "toggleAll": {
      const updateTodos = state.todos.map((todo) => ({
        ...todo,
        isCompleted: action.payload,
      }));
      return {
        ...state,
        todos: updateTodos,
      };
    }
    case "changeFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "changeTodo": {
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
      return {
          ...state,
          todos: updatedTodos,
      }
    }
    case "toggleTodo": {
        const updatedTodos = state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        });
        return {
            ...state,
            todos: updatedTodos,
        }
      }
      case 'removeTodo': {
          const updateTodos = state.todos.filter(todo => todo.id !== action.payload)
          return {
              ...state,
              todos: updateTodos,
          }
      }
    default:
      return state;
  }
};
export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
