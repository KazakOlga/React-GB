import './App.css';
import Message from './message.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world
        </p>
        <Message author={"User5222"} body={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptas."}/>
      </header>
    </div>
  );
}

export default App;
