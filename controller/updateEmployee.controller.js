import employeeModel from "../model/employee.model.js";

const updateEmployees = async (req, res) => {
    try {
        const employeeId = req.query.employee_id
        const department = req.body.department;

        if (!employeeId || !department) {
            return res.status(400).json({ message: "employee_id and department fields are required" })
        }

        const updatedEmployee = await employeeModel.findOneAndUpdate({
            employee_id: employeeId
        }, {
            $set: {
                department: department
            }
        }, {
            new: true
        })

        return res.status(200).json({ message: "Employee successfully updated", updatedEmployee })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export default updateEmployees