import employeeModel from "../model/employee.model.js";

const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.query.employee_id;
        if (!employeeId) {
            return res.status(400).json({ message: "employee_id is required" })
        }

        await employeeModel.deleteOne({ employee_id: employeeId })
        return res.status(200).json({ message: "Employee deleted successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export default deleteEmployee