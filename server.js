const mysql = require('mysql2/promise');
let inquirer = require("inquirer")

const PORT = process.env.PORT || 3001;

let connection

initialize()
main();


async function initialize(){
    connection = await mysql.createConnection({
      host:'localhost', 
      user: 'root', 
      password: 'rootroot', 
      database: 'employees_db'
    })
    console.log(`Connected to the employees_db database.`);
}


async function main() {
    // get the client
    // create the connection
    const responseObject = await inquirer.prompt([ {
        type: 'input',
        name: 'first_name',
        message: "What's your first name",
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default() {
          return 'Doe';
        },
      }])

      console.log(responseObject)


    // query database
    const [rows] = await connection.execute(`SELECT * FROM employees`,[responseObject.first_name] );
    console.table(rows);
  }

// Ask the user initial action question to figure out what they would like to do.
const startApplication = async () => {
      let answer = await inquirer.prompt({
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
      });
      switch (answer.action) {
          case 'View Employees':
              employeeView();
              break;

          case 'View Departments':
              departmentView();
              break;

          case 'View Roles':
              roleView();
              break;

          case 'Add Employees':
              employeeAdd();
              break

          case 'Add Departments':
              departmentAdd();
              break

          case 'Add Roles':
              roleAdd();
              break

          case 'Update Employee Role':
              employeeUpdate();
              break

          case 'Exit':
              connection.end();
              break;
      };
      initialAction();
  };
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