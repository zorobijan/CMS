const inquirer = require("inquirer");
const mysql = require('mysql2/promise');

async function viewRoles(main, connection) {
    const [rows] = await connection.execute(`SELECT * FROM roles`)
    console.table(rows)
    main()
};

async function addRole(main, connection) {

    let departments = await connection.execute(`SELECT * FROM department`)
    let role = await connection.execute(`SELECT * FROM roles`)
    let answer = await inquirer.prompt([
        {
            name: 'employee_title',
            type: 'input',
            message: 'Enter employee title',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter employee salary',
        },
        {
            name: 'department_id',
            type: 'list',
            choices: departments.map((department) => {
                return {
                    name: department.department_name
                }
            }),
            message: 'Select Department',
        }
    ])
    let result = await connection.execute("INSERT INTO roles SET ?", {
        employee_title: answer.employee_title,
        salary: answer.salary,
        department_id: answer.department_id,
    });
    main()
};

module.exports = {
    viewRoles,
    addRole
}
