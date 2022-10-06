const inquirer = require("inquirer");
const mysql = require('mysql2/promise');

async function viewDepartments(main) {
    const [rows] = await connection.execute(`SELECT * FROM departments`, [responseObject.action]) 
    main();
};

async function addDepartment(main) {

    let department = await connection.execute(`SELECT * FROM departments`)
    let answer = await inquirer.prompt([
        {
            name: 'department_name',
            type: 'input',
            message: 'Enter department name',
        }
    ])
    let result = await connection.query("INSERT INTO departments SET ?", {
        department_name: answer.department_name
    });
    main()
}

module.exports = {
    viewDepartments,
    addDepartment
}
