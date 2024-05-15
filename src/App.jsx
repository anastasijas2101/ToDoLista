import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './features/Navigation/Navigation';
import Home from './features/Home/Home';
import TasksList from './features/TasksList/TasksList';
import AboutMe from './features/AboutMe/AboutMe';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import CreateTask from './features/CreateTask/CreateTask';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createTask' element={<CreateTask />} />
          <Route path='/tasksList' element={<TasksList />} />
          <Route path='/aboutMe' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
