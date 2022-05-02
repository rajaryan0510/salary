package com.example.raj.hrms_backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.raj.hrms_backend.exception.ResourceNotFoundException;
import com.example.raj.hrms_backend.model.Employee;
import com.example.raj.hrms_backend.repository.EmployeeRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hrms/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	//getAllEmployees
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		return employeeRepo.findAll();
	}
	
	//create employee rest api
	@PostMapping("/employee")
	public Employee AddEmployee(@RequestBody Employee employee) {
		return employeeRepo.save(employee);
	}
	
	//get employee by id
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		
		Employee employee = employeeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		return ResponseEntity.ok(employee);
		
	}
	
	//update employee
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		
		Employee employee = employeeRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id : " + id));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setContact(employeeDetails.getContact());
		employee.setDob(employeeDetails.getDob());
		employee.setBloodGroup(employeeDetails.getBloodGroup());
		employee.setJoiningDate(employeeDetails.getJoiningDate());
		employee.setDepartment(employeeDetails.getDepartment());
		
		Employee updatEmployee = employeeRepo.save(employee);
		
		return ResponseEntity.ok(updatEmployee);
	}
	

	
	//delete employee
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepo.getById(id);
		
		employeeRepo.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
