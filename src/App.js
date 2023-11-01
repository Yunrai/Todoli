import logo from './todoli.png';
import './App.css';
import TaskList from './tasklist';
import PopUp from './popup';

function App() {
  return (
    <div className="App"  >
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
       
    
      </header>
      <body>
          <TaskList />
          <PopUp />
      </body>
    </div>
  );
}

export default App;
