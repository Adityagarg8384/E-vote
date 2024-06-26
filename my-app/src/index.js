import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Voterregister } from './component/voterregister';
import { Candidateregister } from './component/candidateregister';
import Login from './component/login';
import Register from './component/register';
import { Main } from './component/main';
import Result from './component/result';

const router= createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}></Route>
    <Route path="Register" element={<Register/>}></Route>
    <Route path="Login" element={<Login/>}></Route>
    <Route path="Main/Voterregister" element={<Voterregister/>}></Route>
    <Route path="Main/Candidateregister" element={<Candidateregister/>}></Route>
    <Route path="Main" element={<Main/>}></Route>
    <Route path="Main/Result" element={<Result/>}></Route>
    {/* <Route path="voterregister" element={<voterregister/>}></Route> */}

    </>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router= {router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
