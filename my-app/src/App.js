import logo from './logo.svg';
import './App.css';
import Layout from './component/Layout';
// import Layout from '../component/Layout';
import FrontPage from './component/FrontPage';
import { FileProvider } from './context/FIlecontext';
import { Filecontext } from './context/FIlecontext';
import { useState } from 'react';

function App() {
  const [da, setDa] = useState(null);

  const updateda=()=>{
    console.log("Hello world");
  }

  return (
    <Filecontext.Provider value={{ da, updateda}}>
      <div>
        <Layout />
        <FrontPage />
      </div>
    </Filecontext.Provider>
  );
}

export default App;
