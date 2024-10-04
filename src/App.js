import { Route, Routes } from 'react-router-dom';
import './App.css';
import Car from './components/Car';
import Footer from './components/Footer';
import Header from './components/Header'
import ViewCar from './components/ViewCar';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Car/>}/>
        <Route path='/ViewCar/:id' element={<ViewCar/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
