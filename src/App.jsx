import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './features/Navigation/Navigation';
import Pocetna from './features/Pocetna/Pocetna';
import KreirajTask from './features/KreirajTask/KreirajTask';
import ListaTaskova from './features/ListaTaskova/ListaTaskova';
import ONama from './features/ONama/ONama';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Pocetna />} />
          <Route path='/kreirajTask' element={<KreirajTask />} />
          <Route path='/listaTaskova' element={<ListaTaskova />} />
          <Route path='/' element={<ONama />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
