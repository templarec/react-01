import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
function App() {
  const userIsLogged = false;
  const list = [
    "Lorenzo",
    "Marco",
    "Luca"
  ];


  return (
    <>
      <div>
        <ul>
          {
            list.map((name, id) => <li key={id}> <Card nome={name} /></li>)
          }
        </ul>
      </div>

    </>
  );
}

export default App;
