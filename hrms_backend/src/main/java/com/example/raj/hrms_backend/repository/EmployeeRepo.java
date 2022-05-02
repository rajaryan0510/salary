package com.example.raj.hrms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.raj.hrms_backend.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}
