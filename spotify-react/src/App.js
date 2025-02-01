// Code: Main App component
import './App.css';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}



export default App;
