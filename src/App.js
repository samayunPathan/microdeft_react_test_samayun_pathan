import './App.css';
import Auth from './components/auth/auth';
import blog  from './components/blog/blog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Auth/>  
    </div>
  );
}

export default App;
