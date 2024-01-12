
import { Provider } from 'react-redux'
import { store } from './app/store'
import Todo from './Components/Todo'
import TodoForm from './Components/TodoForm'


function App() {
  

  return (
    <Provider store={store}>
     <div>
     <TodoForm/>
      <Todo/>
     </div>
    </Provider>

  )
}

export default App
