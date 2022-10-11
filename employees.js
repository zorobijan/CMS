const inquirer = require("inquirer");
const mysql = require('mysql2/promise');

async function viewEmployees(main, connection) {
    const [rows] = await connection.execute(`SELECT * FROM employees`)
    console.table(rows)
    main();
};

async function addEmployee(main, connection) {

    let roles = await connection.execute(`SELECT * FROM roles`)
    let managers = await connection.execute(`SELECT * FROM employees`)
    let answer = await inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter first name',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter last name',
        },
        {
            name: 'employee_Id',
            type: 'list',
            choices: roles.map((roles) => {
                return {
                    name: roles.employee_title,
                    value: roles.role_id
                }
            }),
            message: "Enter employee ID",
        },
        {
            name: 'manager_Id',
            type: 'list',
            choices: managers.map((employees) => {
                return {
                    name: employees.first_name,
                    value: employees.id
                }
            }),
            message: "Enter manager ID",
        }
    ])
    let result = await connection.execute("INSERT INTO employees SET ?", {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.employee_Id,
        manager_id: answer.manager_Id
    });
    main()
};

async function updateEmployee(main, connection) {
    let employee = await connection.execute(`SELECT * FROM employees`)
    main()
};
module.exports = {
    viewEmployees,
    addEmployee,
    updateEmployee
}