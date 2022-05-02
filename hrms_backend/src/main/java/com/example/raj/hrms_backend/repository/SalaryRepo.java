package com.example.raj.hrms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.raj.hrms_backend.model.Salary;

@Repository
public interface SalaryRepo extends JpaRepository<Salary, Long> {	

}
