import axios from "axios";

const EMPLOYEE_SALARY_API_BASE_URL = "http://localhost:8080/hrms/salary"

class SalaryService {

    salaryReport(){
        return axios.get(EMPLOYEE_SALARY_API_BASE_URL);
    }

    addSalary(salary){
        return axios.post(EMPLOYEE_SALARY_API_BASE_URL, salary);
    }

}

export default new SalaryService()