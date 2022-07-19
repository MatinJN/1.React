import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';


function App() {
  const users = [
    {
      id: 1,
      name:'Mete',
      salary:10
    },
    {
      id: 3,
      name:'Sofiya',
      salary:10
    },
    {
      id: 2,
      name:'Atilla',
      salary:10
    },
    {
      id: 4,
      name:'Jasmin',
      salary:10
    }

  ]
  return (
    <div className="App">
    <Header/>
    <CardList userlist={users}/>
    </div>
  );
}

export default App;
