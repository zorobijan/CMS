function accessRoles () {

    return inquirer
        .prompt ([
            {
                type: "input",
                name: "name"
                message: "Add department name",
            },
        ])
}
