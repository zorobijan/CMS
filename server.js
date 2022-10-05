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

      console.log(responseObject)
} 
    // query database
async function viewDepartments () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
  }; 
async function viewRoles () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
}; 
async function viewEmployees () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
}; 
async function addDepartment () {const [rows] = await connection.execute(`INSERT INTO department SET ?`, {
  departmentName: responseObject.
}
}; 
async function addRole () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
}; 
async function addEmployee () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
}; 
async function updateEmployee () {const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] )
}; 

    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM roles`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM employees`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM departments`,[responseObject.action] );
    console.table(rows)
    const [rows] = await connection.execute(`SELECT * FROM roles where employee title = ?`,[responseObject.employee_title] );
    const [rows] = await connection.execute(`SELECT * FROM employees`,[responseObject.] );
    const [rows] = await connection.execute(`SELECT * FROM roles where firstname = ?`,[responseObject.first_name] );
    const [rows] = await connection.execute(`SELECT * FROM roles where firstname = ?`,[responseObject.first_name] );


    await inquirer.prompt([ {
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



  }



    

//department query
  db.query('SELECT * FROM departments', function (err, results) {
    console.log(results);
  });
//roles queries
  db.query('SELECT * FROM roles', function (err, results) {
    console.log(results);
  });
  
  //employees queries
  db.query('SELECT * FROM employees', function (err, results) {
    console.log(results);
  });



  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });