import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    }
    //binding event handler method in constructor 
    this.addEmployee=this.addEmployee.bind(this);
    this.editEmployee=this.editEmployee.bind(this);
  }

  //this method just called when component mount 
  componentDidMount(){
      EmployeeService.getEmployees().then((res) => {
        
        this.setState({employees: res.data});

      });
  }
  addEmployee(){
      this.props.history.push('/add-employees');
  }
  editEmployee(id){
      this.props.history.push('/update-employees/${id}');
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
            <button  className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actiones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                      <button onClick = { () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
