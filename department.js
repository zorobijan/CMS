const inquirer = require("inquirer");

const viewDepartments = async () => {
    const [rows] = await connection.execute(`SELECT * FROM departments where first_name = ?`,[responseObject.first_name] );
    console.log(results);
}

const 
function addDepartment () {

    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name"
                message: "Add department name",
            },
        ])
}
