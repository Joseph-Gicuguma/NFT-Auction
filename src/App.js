import './App.css';
import MainApp from './components/MainApp';
import Navbar from './components/views/home/Navbar';
import Homebody from './components/views/home/Homebody';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainApp/>
      <Homebody/>
    </div>
  );
}

export default App;
