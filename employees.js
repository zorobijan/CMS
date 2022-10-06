const inquirer = require("inquirer");
const mysql = require('mysql2/promise');

async function viewEmployees(main) {
    const [rows] = await connection.execute(`SELECT * FROM employees`, [responseObject.action])
    main();
};

async function addEmployee(main) {

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
            name: 'employeeRoleId',
            type: 'list',
            choices: roles.map((role) => {
                return {
                    name: role.employee_title,
                    value: role.role_id
                }
            }),
            message: "Enter employee ID",
        },
        {
            name: 'employeeManagerId',
            type: 'list',
            choices: managers.map((employee) => {
                return {
                    name: employee.first_name,
                    value: employee.id
                }
            }),
            message: "Enter manager ID",
        }
    ])
    let result = await connection.execute("INSERT INTO employee SET ?", {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.employeeRoleId,
        manager_id: answer.employeeManagerId
    });
    main()
};

async function updateEmployee(main) {
    let employee = await connection.execute(`SELECT * FROM employees`, [responseObject.action])
};
module.exports = {
    viewEmployees,
    addEmployee,
    updateEmployee
}