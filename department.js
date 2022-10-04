const inquirer = require("inquirer");


function accessDepartment () {

    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name"
                message: "Add department name",
            },
        ])
}

module.exports = accessDepartment;