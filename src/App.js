import logo from './todoli.png';
import './App.css';
import TaskList from './tasklist';
import PopUp from './popup';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Footer from './footer';


function App() {
    const navigate = useNavigate();
    const navigateHome = () =>{
        navigate('/home');
    };
 
  return (
   
   <div className="App"  >
      <header className="App-header">
       
       
        <img src={logo} className="logo" alt="logo" onClick={navigateHome} />
       
    
      </header>
      <body>
          <TaskList />
          <PopUp />

  
        <Footer />
          <Routes>
            <Route 
            path="/home" 
            element={App} />
          </Routes>
      </body>
    </div>
 
  );
}

export default App;
