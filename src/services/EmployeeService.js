import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
addEmployees(employee){
    //as value we are posting in employee object
return axios.post(EMPLOYEE_API_BASE_URL,employee)
}

}
export default new EmployeeService();
