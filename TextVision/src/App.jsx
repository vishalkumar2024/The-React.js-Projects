import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForms';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  let toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#042743'
      setMode('dark')
      document.title = 'TextVision-Dark Mode';
    }
    else {
      document.body.style.backgroundColor = 'white'
      setMode('light');
      document.title = 'TextVision-Light Mode';

    }
  }


  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />


      <div id="container">
        <TextForm mode={mode} />
      </div>

    </div>
  );
}

export default App;

