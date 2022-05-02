import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class SalaryReportComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
                salary: []
        }
        this.addSalary = this.addSalary.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.salaryReport = this.salaryReport.bind(this); 
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

    addSalary(){
        this.props.history.push('/addSalary');
    }

    salaryReport(){
        this.props.history.push('/salaryReport');
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Employee Salary Report</h1>
                
                <button style={{marginBottom:"2px"}} className="btn btn-dark" onClick={this.addSalary}> Generate Salary </button>
                
                

                <div className='row'>
                    <table className='table table-striped table-bordered' >

                        <thead className='bg-info'>
                            <tr>
                                <th> Employee Id </th>
                                <th> Name </th>
                                <th> Month </th>
                                <th> Working Days </th>
                                <th> Basic Pay </th>
                                <th> HRA </th>
                                <th> Total </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.salary.map(
                                    salaries =>
                                    <tr key={salaries.id}>
                                        <td> {salaries.id} </td>
                                        <td> {salaries.firstName} {salaries.lastName} </td>
                                        <td> {salaries.month} </td>
                                        <td> {salaries.totalPaidDays} </td>
                                        <td> {salaries.basic} </td>
                                        <td> {salaries.hra} </td>
                                        <td> {salaries.totalPaid} </td>
                                        {/* <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className='btn btn-info ' style={{marginRight:"10px"}}> Update </button>
                                            
                                            <button onClick={ () => this.deleteEmployee(employee.id)} className='btn btn-danger'style={{backgroundColor:"cyan",color:"red",fontWeight:"bold"}}> Delete </button>
                                        </td> */}
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
                {/* <h1>DropDown</h1>
                <div>
                    <select>
                        {this.state.emoloyees.map((employee) => (
                            <option key={employee}
                            value={employee}> {employee.firstName} {employee.lastName} </option>
                        ))}
                    </select>
                </div> */}
                
            </div>
        );
    }
}

export default SalaryReportComponent;