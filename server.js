const mysql = require('mysql2/promise');
const {viewDepartments, addDepartment} = require('./department.js')
const {viewRoles, addRole} = require('./roles.js')
const {viewEmployees, addEmployee} = require('./employees.js')

let inquirer = require("inquirer")

let connection

initialize()
main();

async function initialize(){
  try {
    
    connection = await mysql.createConnection({
      host:'localhost', 
      user: 'root', 
      password: 'rootroot',
      database: 'employees_db'})
  } catch (error) {
    console.log(error)
  }
}

async function main() {
    // get the client
    // create the connection
    let responseObject = await inquirer.prompt([{ 
        type: 'list',
        name: 'action',
        message: 'Please select one of the following options',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add Departments',
            'Add Roles',
            'Add Employees',
            // 'Update Employee Role',
            // 'Exit'
        ]
    }])

      switch (responseObject.action) {
        case 'View Departments':
          console.log("test")
         await  viewDepartments(main, connection);
          break;
      }
      switch (responseObject.action) {
        case 'View Roles':
          viewRoles(main, connection);
          break;
      }
      switch (responseObject.action) {
        case 'View Employees':
          viewEmployees(main, connection);
          break;
      }
      switch (responseObject.action) {
        case 'Add Departments':
          addDepartment(main, connection);
          break;
      }
      switch (responseObject.action) {
        case 'Add Roles':
          addRole(main, connection);
          break;
      }
      switch (responseObject.action) {
        case 'Add Employees':
          addEmployee(main, connection);
          break;
      }
      switch (responseObject.action) {
        case 'addDepartments':
          updateEmployee(main, connection);
          break;
      }
} 
