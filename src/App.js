import { TodosProvider } from 'context/todos';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
const App = () => {
  return (
    <TodosProvider>
    <div className="todoapp">
      <Header/>
      <Main />
      <Footer/>
    </div>
    </TodosProvider>
  );
}

export default App;
