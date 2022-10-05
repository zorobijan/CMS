const mysql = require('mysql2/promise');
const mysql = require('mysql2/promise');
let inquirer = require("inquirer")

let connection

initialize()
main();


async function initialize(){
    connection = await mysql.createConnection({host:'localhost', user: 'root', database: ''})

}


async function main() {
    // get the client
    // create the connection
    const responseObject = await inquirer.prompt([ {
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
      }
      if (responseObject.action === 'View Departments') {
        viewDepartments()
      }
      else if (responseObject.action === 'View Roles') {
        viewRoles()
      }
      else if (responseObject.action === 'View Employees') {
        viewEmployees()
      }
      else if (responseObject.action === 'Add Departments') {
        addDepartment()
      }
      else if (responseObject.action === 'Add Roles') {
        addRole()
      }
      else if (responseObject.action === 'Add Employees') {
        addEmployee()
      }
      else if (responseObject.action === 'Update Employee Role') {
        updateEmployeeRole()
      }
])

      console.table(responseObject)
} 
    // query database
async function viewDepartments () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
}; 
async function viewRoles () {const [rows] = await connection.execute(`SELECT * FROM roles`,[responseObject.action] )
}; 
async function viewEmployees () {const [rows] = await connection.execute(`SELECT * FROM employees`,[responseObject.action] )
}; 
async function addDepartment () {

  let department = await connection.execute(`SELECT * FROM departments`)
  let answer = await inquirer.prompt([
    {
      name: 'department_name'
      type: 'input'
      message: 'Enter department name'
    }
  ])
  let result = await connection.query("INSERT INTO departments SET ?", {
      department_name: answer.department_name
});

}
async function addRole () {
  
  let role = await connection.execute(`SELECT * FROM roles`)
  let answer = await inquirer.prompt([
    {
      name: 'employee_title'
      type: 'input'
      message: 'Enter employee title'
    }
    {
      name: 'salary'
      type: 'input'
      message: 'Enter employee salary'
    }
    {
      name: 'department_id'
      type: 'input'
      choices: departments.map((department) => {
        return {
          name: department.department_name,
        }
      })
      message: 'Enter department ID'
    }
  ])
  let result = await connection.query("INSERT INTO roles SET ?", {
      role_name: answer.department_name
});
}; 
async function addEmployee () {

  let role = await connection.execute(`SELECT * FROM roles`)
  let manager = await connection.execute(`SELECT * FROM employees`)
  let answer = await inquirer.prompt([
    {
      name: 'first_name'
      type: 'input'
      message: 'Enter first name'
    }
    {
      name: 'last_name'
      type: 'input'
      message: 'Enter last name'
    }
    {
      name: 'employeeRoleId'
      type: 'list'
      choices: roles.map((role) => {
        return {
          name: role.employee_title,
          value: role.role_id
        }
      })
      message: "Enter employee ID"
    }
    {
      name: 'employeeManagerId'
      type: 'list'
      choices: viewEmployees.map((employee) => {
        return {
          name: employee.role.id,
        }
      })
      message: "Enter manager ID"
    }
  ])
  let result = await connection.query("INSERT INTO employee SET ?", {
    first_name: answer.firstName,
    last_name: answer.lastName,
    role_id: answer.employeeRoleId,
    manager_id: answer.employeeManagerId
});
}; 
async function updateEmployee () {
  
  let employee = await connection.execute(`SELECT * FROM employees`,[responseObject.action] )
}; 


  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });