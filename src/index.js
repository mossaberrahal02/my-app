import React from 'react';
import ReactDOM from 'react-dom/client';//khas t importer reactdom mn 'react-dom/client' darori hadi hiya li kayna f version jdidda 
import App from './App';

//ReactDOM.render(<h1>test render</h1>,document.getElementById('root'));  !!! had l methode 9damet f version 9dima
//render has 2 parametres render(what, where)

const root = ReactDOM.createRoot(document.getElementById('root'));//daba khedamin b had l methode 
root.render(
    <App/>
);//l parametre what khas tkon kamla f west men balise wehda