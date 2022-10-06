const mysql = require('mysql2/promise');
const {viewDepartments, addDepartment} = require('./department.js')
const {viewRoles, addRole} = require('./roles.js')
const {viewEmployees, addEmployee, updateEmployee} = require('./employees.js')

let inquirer = require("inquirer")

let connection

initialize()
main();

async function initialize(){
    connection = await mysql.createConnection({
      host:'localhost', 
      user: 'root', 
      password: 'rootroot',
      database: 'employees_db'})
}

async function main() {
    // get the client
    // create the connection
    let responseObject = await inquirer.prompt({ 
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
            'Update Employee Role',
            'Exit'
        ]
    })
      switch (responseObject.action) {
        case 'viewDepartments':
          viewDepartments(main);
          break;
      }
      switch (responseObject.action) {
        case 'viewRoles':
          viewRoles(main);
          break;
      }
      switch (responseObject.action) {
        case 'viewEmployees':
          viewEmployees(main);
          break;
      }
      switch (responseObject.action) {
        case 'addDepartments':
          addDepartments(main);
          break;
      }
      switch (responseObject.action) {
        case 'addDepartments':
          addRoles(main);
          break;
      }
      switch (responseObject.action) {
        case 'addDepartments':
          addEmployees(main);
          break;
      }
      switch (responseObject.action) {
        case 'addDepartments':
          updateEmployees(main);
          break;
      }
      console.table(responseObject)
} 


  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })