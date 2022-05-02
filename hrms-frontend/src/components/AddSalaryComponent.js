import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import SalaryService from '../services/SalaryService';

class AddSalaryComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                emoloyees:[],
                month:'',
                firstName: '',
                lastName: '',
                totalPaidDays: '',
                basic: '',
                hra: '',
                dearnessAllowance: '',
                travelAllowance: '',
                pf: '',
                totalTax: '',
                totalReimbursement: '',
                totalDeduction: '',
                totalPaid: '',

        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMonthHandler = this.changeMonthHandler.bind(this);
        this.changeWorkingDayHandler = this.changeWorkingDayHandler.bind(this);
        this.changeBasicPayHandler = this.changeBasicPayHandler.bind(this);
        this.changeHRAHandler = this.changeHRAHandler.bind(this);
        this.changeDAHandler = this.changeDAHandler.bind(this);
        this.changeTAHandler = this.changeTAHandler.bind(this);
        this.changePFHandler = this.changePFHandler.bind(this);
        this.changeTotalTaxHandler = this.changeTotalTaxHandler.bind(this);
        this.changeTotalReimbursementHandler = this.changeTotalReimbursementHandler.bind(this);
        this.changeTotalDeductionHandler = this.changeTotalDeductionHandler.bind(this);
        this.changeTotalPaidHandler = this.changeTotalPaidHandler.bind(this);

        this.saveEmployeeSalary = this.saveEmployeeSalary.bind(this);
         
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ emoloyees: res.data});
        })
    }

    saveEmployeeSalary = (e) => {
        e.preventDefault();

        let salary = {firstName: this.state.firstName, lastName: this.state.lastName, month: this.state.month, 
            totalPaidDays: this.state.totalPaidDays, basic: this.state.basic, hra: this.state.hra, dearnessAllowance: this.state.dearnessAllowance, 
            travelAllowance: this.state.travelAllowance, pf: this.state.pf, totalTax: this.state.totalTax, totalReimbursement: this.state.totalReimbursement,
            totalDeduction: this.state.totalDeduction, totalPaid: this.state.totalPaid };
            console.log('salary =>' + JSON.stringify(salary));

           SalaryService.addSalary(salary).then(res =>{
               this.props.history.push('/salaryReport');
           });

    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeMonthHandler = (event) => {
        this.setState({month: event.target.value});
    }
    changeWorkingDayHandler = (event) => {
        this.setState({totalPaidDays: event.target.value});
    }
    changeBasicPayHandler = (event) => {
        this.setState({basic: event.target.value});
    }
    changeHRAHandler = (event) => {
        this.setState({hra: event.target.value});
    }
    changeDAHandler = (event) => {
        this.setState({dearnessAllowance: event.target.value});
    }
    changeTAHandler = (event) => {
        this.setState({travelAllowance: event.target.value});
    }
    changePFHandler = (event) => {
        this.setState({pf: event.target.value});
    }
    changeTotalTaxHandler = (event) => {
        this.setState({totalTax: event.target.value});
    }
    changeTotalReimbursementHandler = (event) => {
        this.setState({totalReimbursement: event.target.value});
    }
    changeTotalDeductionHandler = (event) => {
        this.setState({totalDeduction: event.target.value});
    }
    changeTotalPaidHandler = (event) => {
        this.setState({totalPaid: event.target.value});
    }
    

    cancel() {
        this.props.history.push('/salaryReport');
    }


    render() {
        return (
            <div>
                <div style={{color:"#373e98"}} className='container'>
                    <div className='row'>
                        <div style={{marginTop:"20px",borderRadius:"10px", backgroundColor:"#fffaf0"}} className='card col-md-6 offset-md-3 '>
                            <h3 style={{marginTop:"5px"}} className='text-center'>★Add Employee Salary★</h3>
                            <div className='card-body shadow p-4 rounded'>
                                <form>
                                    <table>
                                        <tr>
                                            <td>
                                            <div style={{marginRight:"20px"}} className='form-group'>
                                                <label> Select Employee ID </label>
                                                <select className='form-control' name='employeeName' value={this.state.id}>
                                                    {this.state.emoloyees.map((employee) => (
                                                        <option onClick={ () => this.getEmployeeId(employee.id)} key={employee}
                                                        value={employee}> {employee.id} </option>
                                                    ))}
                                                </select>
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label > Select Month </label>
                                        <input type="month" name='month' className='form-control'
                                            value={this.state.month} onChange={this.changeMonthHandler} required/>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                            <td>
                                            <div style={{marginRight:"20px"}} className='form-group'>
                                                <label> First Name </label>
                                                <select className='form-control' name='firstName' value={this.state.firstName}>
                                                    {this.state.emoloyees.map((employee) => (
                                                        <option key={employee}
                                                        value={employee}> {employee.firstName}</option>
                                                    ))}
                                                </select>
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label > Last Name </label>
                                        <input type="text" name='lastName' className='form-control'
                                            value={this.state.lastName} required/>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                    <div style={{marginRight:"20px"}} className='form-group'>
                                        <label> Total Working Days </label>
                                        <input type="number" name='totalPaidDays' className='form-control'
                                            value={this.state.totalPaidDays} onChange={this.changeWorkingDayHandler} required/> 
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label> Basic Salary </label>
                                        <input type="number" name='basic' className='form-control'
                                            value={this.state.basic} onChange={this.changeBasicPayHandler} required/> 
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                    <div style={{marginRight:"20px"}} className='form-group'>
                                        <label> Total HRA </label>
                                        <input type="number" name='hra' className='form-control'
                                            value={this.state.hra} onChange={this.changeHRAHandler} required/> 
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label> Dearness Allowance </label>
                                        <input type="number" name='dearnessAllowance' className='form-control'
                                            value={this.state.dearnessAllowance} onChange={this.changeDAHandler} required/> 
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                    <div style={{marginRight:"20px"}} className='form-group'>
                                        <label> Travel Allowance </label>
                                        <input type="number" name='travelAllowance' className='form-control'
                                            value={this.state.travelAllowance} onChange={this.changeTAHandler} required/> 
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label> Provident Fund </label>
                                        <input type="number" name='pf' className='form-control'
                                            value={this.state.pf} onChange={this.changePFHandler} required/>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                    <div style={{marginRight:"20px"}} className='form-group'>
                                        <label> Total Tax </label>
                                        <input type="number" name='totalTax' className='form-control'
                                            value={this.state.totalTax} onChange={this.changeTotalTaxHandler} required/> 
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label> Total Reimbursement </label>
                                        <input type="number" name='totalReimbursement' className='form-control'
                                            value={this.state.totalReimbursement} onChange={this.changeTotalReimbursementHandler} required/>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>
                                    <div style={{marginRight:"20px"}} className='form-group'>
                                        <label> Total Deduction </label>
                                        <input type="number" name='totalDeduction' className='form-control'
                                            value={this.state.totalDeduction} onChange={this.changeTotalDeductionHandler} required/> 
                                    </div>
                                    </td>
                                    <td>
                                    <div className='form-group'>
                                        <label> Total Paid </label>
                                        <input type="number" name='totalPaid' className='form-control'
                                            value={this.state.totalPaid} onChange={this.changeTotalPaidHandler} required/>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <center>
                                    <div className='form-group'>
                                        <button className='btn btn-info' onClick={this.saveEmployeeSalary} style={{marginTop:"10px",width:"100px",backgroundColor:"#373e98",color:"wheat"}}>Save</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px",marginTop:"10px",width:"100px",backgroundColor:"#ed0b70",color:"wheat"}} >Cancel</button>
                                    </div>
                                    </center>
                                    </td>
                                    </tr>
                                    
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
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

export default AddSalaryComponent