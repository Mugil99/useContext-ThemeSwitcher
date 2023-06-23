import logo from './logo.svg';
import './App.css';
import Provider from './context/Provider';
import { useContext } from 'react';
import colorContext from './context/colorContext';
import Theme from './context/Theme';

function App() {
  return (
   <div>
      <Theme/>
   </div>
  );
}

export default App;
