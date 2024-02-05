import logo from './logo.svg';
import './App.css';
import MagicBall from './components/Magic-ball/MagicBall';
import { Button } from '@mui/material';


function App() {
let answers = [
  "Бесспорно",
  "Мне кажется - Да",
];

let [number,setNumber] = useState(Math.floor(Math.random() * answers.length))

const handleClick = () => {
  setNumber(Math.floor(Math.random() * answers.length))
}

  return (
    <div className="App">
      <header className="App-header">
        <MagicBall answer={ answers[Math.floor(Math.random() * answers.length)]} />
       <Button onClick={handleClick}>Получить предсказание</Button>
      </header>
    </div>
  );
}

export default App;
