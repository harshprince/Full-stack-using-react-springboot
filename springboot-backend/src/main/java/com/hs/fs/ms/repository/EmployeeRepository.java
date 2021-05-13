package com.hs.fs.ms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hs.fs.ms.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

}
