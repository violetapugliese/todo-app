import { TodosProvider } from 'context/todos';
import Header from './components/Header';
import Main from './components/Main';
const App = () => {
  return (
    <TodosProvider>
    <div className="todoapp">
      <Header/>
      <Main />
    </div>
    </TodosProvider>
  );
}

export default App;
