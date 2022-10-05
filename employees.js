const inquirer = require("inquirer");


function employeeAccess () {

    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name"
                message: "Add department name",
            },
        ])
}

module.exports = employeeAccess