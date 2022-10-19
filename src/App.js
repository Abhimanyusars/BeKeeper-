import './App.css';
import {React} from "react";
import "./components/css/App.css";
import Notes from './components/NoteComponents/Notes';
import Header from './components/NoteComponents/Header';

function App() {
  return (
    <div className="main">
      <Header></Header>
      
      <Notes></Notes>
      
    </div>
  );
}

export default App;
