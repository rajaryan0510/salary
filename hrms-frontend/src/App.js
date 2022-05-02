import logo from './logo.svg';
import './App.css';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import AddSalaryComponent from './components/AddSalaryComponent';
import SalaryReportComponent from './components/SalaryReportComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path= '/' exact component = {ListEmployeeComponent}></Route>
              <Route path= '/listEmployees'  component = {ListEmployeeComponent}></Route>
              <Route path= '/addEmployee' component = {AddEmployeeComponent}></Route>
              <Route path= '/updateEmployee/:id' component = {UpdateEmployeeComponent}></Route>
              <Route path= '/addSalary' component = {AddSalaryComponent}></Route>
              <Route path= '/salaryReport' component = {SalaryReportComponent}></Route>
           </Switch>
          </div>
          <FooterComponent/>
      </Router>  
    </div>
    
  );
}

export default App;
