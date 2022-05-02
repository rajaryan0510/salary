import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {MdDelete} from 'react-icons/md';
import { BiEdit } from "react-icons/bi";
import { TypeH1 } from 'react-bootstrap-icons';

class ListEmployeeComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                emoloyees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.addSalary = this.addSalary.bind(this); 
        this.viewEmployeeSalary = this.viewEmployeeSalary.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({emoloyees: this.state.emoloyees.filter(employee => employee.id !== id)});
        });
    }

    editEmployee(id){
        this.props.history.push(`/updateEmployee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ emoloyees: res.data});
        })
    }

    addEmployee(){
        this.props.history.push('/addEmployee');
    }

    addSalary(){
        this.props.history.push('/addSalary');
    }

    viewEmployeeSalary(){
        this.props.history.push('/salaryReport');
    }

    render() {
        return (
            <div style={{color:"#373e98"}}>

        <div className='container p-6 shadow p-2 rounded  bg-light my-3 border' >  
            <h1 className='text-center '> ★★Employee List★★</h1>
            </div>

               
                 
                <button style={{marginBottom:"2px",marginRight:"10px"}} className="btn btn-outline-success  shadow p-2 rounded" onClick={this.addEmployee} > ★ Add Employee ★</button>
                <button style={{marginBottom:"2px",marginRight:"10px"}} className="btn btn-outline-info  shadow p-2 rounded" onClick={this.addSalary}>★ Generate Salary ★ </button>
                <button style={{marginBottom:"2px"}} className="btn btn-outline-warning  shadow p-2 rounded" onClick={this.viewEmployeeSalary}>★ View Salary ★ </button>

                

                <div  className='row shadow p-2 rounded'>
                    <table className=' table table-bordered  table-striped  '  >

                        <thead class="table-danger" >
                            <tr style={{color:"#373e98"}}>
                                <th > Employee Id</th>
                                <th> Name </th>
                                <th> Email Id</th>
                                <th> Contact</th>
                                <th> Department</th>
                                <th>BloodGroup</th>
                                <th>joiningDate</th>
                                <th> </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.emoloyees.map(
                                    employee =>
                                    <tr class="table-info"  key={employee.id} >
                                        <td > {employee.id} </td>
                                        <td> {employee.firstName} {employee.lastName} </td>
                                        <td> {employee.email} </td>
                                        <td> {employee.contact} </td>
                                        <td> {employee.department} </td>
                                        <td>{employee.bloodGroup}</td>
                                        <td>{employee.joiningDate}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className='btn btn-info ' style={{marginRight:"10px",backgroundColor:"#abd699",color:"#16123f",fontWeight:"bold",fontSize:"25px"}}> <BiEdit/> </button>
                                            
                                            <button onClick={ () => this.deleteEmployee(employee.id)} className='btn btn-danger'style={{backgroundColor:"red",color:"whitesmoke",fontWeight:"bold",fontSize:"25px"}}> <MdDelete/> </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                
                
            </div>
        );
    }
}

export default ListEmployeeComponent;