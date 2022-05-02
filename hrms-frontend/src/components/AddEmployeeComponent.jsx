import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class AddEmployeeComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                contact: '',
                dob: '',
                bloodGroup: '',
                joiningDate: '',
                department: ''

        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeBloodGroupHandler = this.changeBloodGroupHandler.bind(this);
        this.changeJoiningDateHandler = this.changeJoiningDateHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this); 
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, 
            contact: this.state.contact, dob: this.state.dob, bloodGroup: this.state.bloodGroup, joiningDate: this.state.joiningDate, 
            department: this.state.department };
            console.log('employee =>' + JSON.stringify(employee));

           EmployeeService.addEmployee(employee).then(res =>{
               this.props.history.push('/listEmployees');
           });

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    changeContactHandler = (event) => {
        this.setState({contact: event.target.value});
    }
    changeDobHandler = (event) => {
        this.setState({dob: event.target.value});
    }
    changeBloodGroupHandler = (event) => {
        this.setState({bloodGroup: event.target.value});
    }
    changeJoiningDateHandler = (event) => {
        this.setState({joiningDate: event.target.value});
    }
    changeDepartmentHandler = (event) => {
        this.setState({department: event.target.value});
    }

    cancel() {
        this.props.history.push('/listEmployees');
    }


    render() {
        return (
            <div>
                <div style={{color:"#373e98" ,marginTop:"10px", marginBlock:"10px"}} className='container' >
                    <div className='row' >
                        <div style={{marginTop:"20px",borderRadius:"10px", backgroundColor:"#fffaf0"}} className='card col-md-6 offset-md-3 ' >
                            <h3 className='text-center'>★Add Employee★</h3>
                            <div className='card-body  shadow p-4 rounded'>
                                <form>
                                    <div className='form-group' >
                                        <label> First Name: </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name: </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Id: </label>
                                        <input type="email" placeholder='example@email.com' name='email' className='form-control'
                                            value={this.state.email} onChange={this.changeEmailHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Contact: </label>
                                        <input type="number" placeholder='eg.- 82109xxxxx' maxLength='10' name='contact' className='form-control'
                                            value={this.state.contact} onChange={this.changeContactHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Date Of Birth: </label>
                                        <input type="date" placeholder='D-O-B' name='dob' className='form-control'
                                            value={this.state.dob} onChange={this.changeDobHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Blood Group: </label>
                                        <input placeholder='eg.- A+' name='bloodGroup' className='form-control'
                                            value={this.state.bloodGroup} onChange={this.changeBloodGroupHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Joining Date: </label>
                                        <input type="date" placeholder='Joining Date' name='joiningDate' className='form-control'
                                            value={this.state.joiningDate} onChange={this.changeJoiningDateHandler} required/> 
                                    </div>
                                    <div className='form-group'>
                                        <label> Department: </label>
                                        <select className='form-control' name='department' value={this.state.department} onChange={this.changeDepartmentHandler} required>
                                            <option value="CSE">CSE</option>
                                            <option value="Civil">Civil</option>
                                            <option value="ECE">ECE</option>
                                            <option value="EEE">EEE</option>
                                            <option value="Mechanical">Mechanical</option>
                                            <option value="Agriculture">Agriculture</option>                                           
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <button className='btn btn-info' onClick={this.saveEmployee} style={{marginLeft:"100px", marginTop:"10px"}}>Save</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"100px",marginTop:"10px"}} >Cancel</button>
                                    </div>
                                    
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddEmployeeComponent