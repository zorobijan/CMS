const inquirer = require("inquirer");
const mysql = require('mysql2/promise');

async function viewDepartments(main, connection) {
    const [rows] = await connection.execute(`SELECT * FROM department`) 
    console.table(rows)
    main();
};

async function addDepartment(main, connection) {

    let department = await connection.execute(`SELECT * FROM department`)
    let answer = await inquirer.prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'Enter department name',
        }
    ])
    let result = await connection.query("INSERT INTO department SET ?", {
        department_name: answer.department_name
    });
    main()
}

module.exports = {
    viewDepartments,
    addDepartment
}
