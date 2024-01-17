import express from 'express';
const app = express.Router()
import addEmployee from '../controller/employee.controller.js';
import getEmployees from '../controller/getEmployees.controller.js';
import updateEmployees from '../controller/updateEmployee.controller.js';
import deleteEmployee from '../controller/deleteEmployee.controller.js';
import searchEmployeeById from '../controller/searchById.controller.js';
import departmentEmployees from '../controller/getEmployeesDepartment.controller.js';
import sortedEmployees from '../controller/sortEmployees.controller.js';

app.post('/api/addEmployee', addEmployee);
app.get('/api/getEmployees', getEmployees);
app.patch('/api/updateEmployee', updateEmployees);
app.delete('/api/deleteEmployee', deleteEmployee);
app.get('/api/searchEmployee', searchEmployeeById);
app.get('/api/departmentEmployees', departmentEmployees);
app.get('/api/sortEmployees', sortedEmployees);

export default app;
