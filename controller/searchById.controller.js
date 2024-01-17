import employeeModel from "../model/employee.model.js";

const searchEmployeeById = async (req, res) => {
    try {
        const employeeId = req.query.employee_id
        if (!employeeId) {
            return res.status(400).json({ message: "employee_id is required" })
        }

        const findEmployee = await employeeModel.findOne({ employee_id: employeeId });
        if (!findEmployee) {
            return res.status(404).json({ message: "Employee not found" })
        } else {
            return res.status(200).json(findEmployee);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export default searchEmployeeById