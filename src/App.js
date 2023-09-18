import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './Components/PlayersList';
import NavB from './Components/NavB';


function App() {
  return (
    
    <div>
      <NavB />
      <div className="App">
      
      <PlayersList />
     </div>
    </div>
  );
}

export default App;
