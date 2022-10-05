DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  department_id INT PRIMARY KEY
  departmentName VARCHAR(30) to hold department name
);

CREATE TABLE roles (
  role_id: INT PRIMARY KEY
  employee_title: VARCHAR(30) to hold role title
  salary: DECIMAL to hold role salary
  department_id: INT to hold reference to department role belongs to
);

CREATE TABLE employees (
  id: INT PRIMARY KEY
  first_name: VARCHAR(30) to hold employee first name
  last_name: VARCHAR(30) to hold employee last name
  role_id: INT to hold reference to employee role
  manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
);

