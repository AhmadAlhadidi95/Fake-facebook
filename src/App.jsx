import './App.css'
// Components
import { MainPage } from './components/MainPage';
import { AllUsers } from './components/AllUsers';
import { EditUser } from './components/EditUser';
// Reoutes
import { Routes, Route } from 'react-router';

function App() {

  return (
    <>
    <div className='container'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>

        <Route path='/all' element={<AllUsers/>}/>

        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
