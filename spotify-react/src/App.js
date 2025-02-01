// Code: Main App component
import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <Header onSearch={setSearchTerm}/>
      <Sidebar/>
      <Main searchTerm={searchTerm}/>
      <Footer/>
    </>
  );
}



export default App;
