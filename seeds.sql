INSERT INTO department (department_id, department_name)
VALUES  (1000, HUMAN RESOURCES),
        (2000, MARKETING),
        (3000, SALES),
        (4000, IT),
        (5000, ENGINEERING),
        (6000, LEGAL),
        (7000, FINANCE);
        (8000, C-Suite);

INSERT INTO roles (role_id, employeeTitle, salary, department_id)
VALUES  (1100, "Secretary", 45000, 1000),
        (1200, "Human Resources Manager", 65000, 1000),
        (2100, "Marketing Executive", 55000, 2000),
        (2200, "Marketing Manager", 75000, 2000),
        (3100, "Sales Development" Representative, 50000, 3000),
        (3200, "Sales Executive", 70000, 3000),
        (3300, "Sales Manager", 85000, 3000),
        (4100, "IT Support", 70000, 4000),
        (4200, "IT Manager", 85000, 4000),
        (5100, "Software Engineer", 125000, 5000),
        (5200, "Product Manager", 125000, 5000),
        (6100, "Compliance Officer", 150000, 6000),
        (7100, "Finance Officer", 150000, 7000),
        (8100, "Chief Revenue Officer", 135000, 8000),
        (8200, "Chief Technical Officer", 200000, 8000),
        (8300, "Chief Executive Officer", 250000, 8000),
  

INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
VALUES  (1101,"Julio","Rodriguez", 1100, 1201),
        (1201,"Ichiro","Suzuki", 1200),
        (2101,"Jesse","Winker", 2100, 2202),
        (2102,"Gary","Payton", 2100, 2202),
        (2202,"Kurt","Kobain", 2200, 5),
        (3101,"Eddie","Vedder", 3100, 3301),
        (3102,"Marshawn","Lynch", 3100, 3301),
        (3201,"Geno","Smith", 3200, 3301),
        (3301,"Geno","Suarez", 3300),
        (4101,"Scott","Servais", 4100, 4202),
        (4102,"Bill","Gates", 4100, 4202),
        (4202,"Jeff","Bezos", 4200),
        (5101,"Richard","Sherman", 5100, 5201),
        (5102,"Bruce","Lee", 5100, 5201),
        (5103,"Jamie","Moyer", 5100, 5201),
        (5201,"Captain","Jack", 5200),
        (6101,"Method","Man", 6100, 8301),
        (7101,"Ghostface","Killer", 7100, 8301),
        (8101,"Son","Goku", 8100),
        (8201,"Naruto","Uzumaki", 8200),
        (8301,"Monkey","D. Luffy", 8300),

       
