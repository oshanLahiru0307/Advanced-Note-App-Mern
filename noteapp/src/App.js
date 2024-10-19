import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/login'
import  Register from './components/register'
import Notes from "./components/notes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/notes' element={<Notes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
