import { Route, Routes } from 'react-router-dom';
import AcasaPage from './pages/Acasa/Acasa.js';
import BlogPage from './pages/Blog/Blog.js';
import DespreMinePage from './pages/DespreMine/DespreMine';
import PsihozonePage from './pages/Psihozone/Psihozone';
import ServiciiPage from './pages/Servicii/Servicii';
import ContactPage from './pages/Contact/Contact';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    // current local domain: http://localhost:3000/
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AcasaPage/>}/>
        <Route path='/despre_mine' element={<DespreMinePage/>}/> 
        <Route path='/psihozone' element={<PsihozonePage/>}/>     
        <Route path='/servicii' element={<ServiciiPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
      </Routes>   
    </div>
      );
}

export default App;
