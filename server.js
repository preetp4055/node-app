import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app = express();
app.use(express.json());
import './db/conn.js'

import employeeRoutes from './routes/employee.router.js';
app.use(employeeRoutes);

const port = process.env.port;
app.listen(port, () => {
    console.log(`App listening on ${port}`)
});