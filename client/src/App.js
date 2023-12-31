import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Form from './pages/Form/Form';
import Detail from './pages/Detail/Detail';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
    </div>
  );
}

export default App;
