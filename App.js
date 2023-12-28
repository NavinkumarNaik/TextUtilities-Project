import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
   const showAlert = (message,type)=>{
         setAlert({
          msg:message,
          type:type

         })
         setTimeout(()=>{
          setAlert(null);
         },1500);
   }
  const toggleMode = ()=>{
           if(mode ==='light')
             {
             setMode("dark");
             document.body.style.backgroundColor = 'gray';
             showAlert("Dark mode has been enabled","success");
             document.title = "Textutils = Dark Mode";
            //  setInterval(() => {
            //   document.title = "TextUtils is Amazing Mode";

            //  }, 2000);
            //  setInterval(() => {
            //   document.title = " Install TextUtils Now";
            // }, 1500);  .............. for title blinking
             }
           else{
            setMode("light")
            document.body.style.backgroundColor = 'white';
            showAlert("light mode has been enabled","success")
            document.title = "Textutils = Light Mode";
              }
}
  return (
    <>
  <Router>
  <Navbar title="UtileText" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
  <Routes> 
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextFrom showAlert={showAlert}heading="Enter the text to analyza below"mode={mode}/> } />
  </Routes>
  </div>

  </Router>
    </>
  );
}

export default App;
