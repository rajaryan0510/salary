package com.example.raj.hrms_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.raj.hrms_backend.exception.ResourceNotFoundException;
import com.example.raj.hrms_backend.model.Salary;
import com.example.raj.hrms_backend.repository.SalaryRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hrms/")
public class SalaryController {
	
	@Autowired
	private SalaryRepo salaryRepo;
	
	//get salary report of all employees
	@GetMapping("/salary")
	public List<Salary> getAllSalaryReport(){
		return salaryRepo.findAll();
	}
	
	//generate salary
	@PostMapping("/salary")
	public Salary addSalary(@RequestBody Salary salary) {
		return salaryRepo.save(salary);
	}
	//get employee salary by id
	@GetMapping("/salary/{id}")
	public ResponseEntity<Salary> getSalaryById(Long id){
		Salary salary = salaryRepo.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee Salary not exist with id : " + id));
		return ResponseEntity.ok(salary);
	}
	
	
}
