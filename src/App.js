import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Ingredients from './components/Ingredients';
import ingredients from './data';

function App() {
  return (
    <div className="App">
        <Header/>
        <Heading/>
        <SubHeading/>
        <Ingredients ingredients={ingredients} />
    </div>
  );
}

export default App;
