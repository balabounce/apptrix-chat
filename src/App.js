import './App.css';
import { Header } from './components';
import { Dialog } from './components';
import { InputForm } from './components';
import socket from './server/socket';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dialog/>
      <InputForm/>
    </div>
  );
}

export default App;
