import './App.css';
import Home from './Home';
import Mui from './mui';
import Mui2 from './mui2';
import Stepper from './stepper';
import About from './about';
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Form4 from './form4';
import Form5 from './form5';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {

      return (
            <Router>
                  <Routes>
                        <Route path='/' element={<Home/>}   />
                        <Route path='/about' element={<About/>}   />
                        <Route path='/mui' element={<Mui/>}   />
                        <Route path='/mui2' element={<Mui2/>}   />
                        <Route path='/stepper' element={<Stepper/>}   />
                        <Route path='/form1' element={<Form1/>}   />
                        <Route path='/form2' element={<Form2/>}   />
                        <Route path='/form3' element={<Form3/>}   />
                        <Route path='/form4' element={<Form4/>}   />
                        <Route path='/form5' element={<Form5/>}   />
                  </Routes>
            </Router>
            );
}

export default App;