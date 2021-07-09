import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import CourseDesc from "./components/CourseDesc";
import CourseList from './components/CourseList';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CourseList} />
      <Route exact path="/courselist/:id" component={CourseDesc} />
    </Switch>
      
    
    
  </BrowserRouter>
  );
}

export default App;
