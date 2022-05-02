import React, { Component } from 'react';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
                salarys: []
        }
        this.salaryReport = this.salaryReport.bind(this);
        this.addSalary = this.addSalary.bind(this);
    }

    salaryReport(){
        this.props.history.push('/salaryReport');
    }

    addSalary(){
        this.props.history.push('/addSalary');
    }

    render() {
        return (
            <div>
                <header>
                    <nav style={{backgroundColor:"#20b2aa"}} className='navbar navbar-expand-md '>
                    <div style={{marginLeft: "20px", color:"#dc143c"}} className='navbar-brand'>  HR Management</div>
                    {/* <button style={{marginLeft: "1090px"}} className="btn btn-warning" onClick={this.salaryReport}>Salary Report</button>
                    <button style={{marginLeft: "20px"}} className="btn btn-warning" onClick={this.addSalary}>Add Salary</button> */}

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;