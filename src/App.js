
import './App.css';
import Home from './pages/home';
import Nav from './pages/nav';
import Footer from './pages/footer';
import Hooka from './pages/Hooka';
import Searchbar1 from './pages/Searchbar1';
import Form1 from './pages/Form1';
import Login from './pages/Login';
import Newpage from './pages/Newpage';
import Formdata from './pages/Formdata';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Task1 from './pages/Task1';
import Table1 from './pages/Table1';
import Table2 from './pages/Table2';
import Comp1 from './Componets/Comp1';
import Comp2 from './Componets/Comp2';
import Cards1 from './Componets/Cards1';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/Task1' element={<Task1/>}/>
        <Route path='/Formdata' element={<Formdata/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Form1' element={<Form1/>}/>
         <Route path='/Searchbar1' element={<Searchbar1/>}/>
        <Route path='/Hooka' element={<Hooka/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Nav' element={<Nav/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='Newpage' element={<Newpage/>}/>
        <Route path='/Table1' element={<Table1/>}/>
        <Route path='/Table2' element={<Table2/>}/>
        <Route path='/' element={<Comp1/>}/>
        <Route path='/Comp2' element={<Comp2/>}/>
        <Route path='/Cards' element={<Cards1/>}/>


      </Routes>
     </Router>
  
  
    </div>
  );
}

export default App;
