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
      {
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default() {
          return 'Doe';
        },
      }
    ])

      console.log(responseObject)


    // query database
    const [rows] = await connection.execute(`SELECT * FROM employees where firstname = ?`,[responseObject.first_name] );



  }

async function 
    const responseObject = await inquirer.prompt([ {
       
    }])
    console.log(results);
    const [rows] = await connection.execute(`SELECT * FROM employees where first_name = ?`,[responseObject.first_name] );
    console.log(results);


    

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