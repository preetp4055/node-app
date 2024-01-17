import employeeModel from "../model/employee.model.js";

const departmentEmployees = async (req, res) => {
    try {
        const department = req.query.department;
        if (!department) {
            return res.status(400).json({ message: "department is required" })
        }

        const findEmployees = await employeeModel.find({ department: new RegExp(`^${department}$`, 'i') }).lean();
        if (findEmployees.length == 0) {
            return res.status(404).json({ message: "Employees not found" })
        } else {
            return res.status(200).json(findEmployees);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export default departmentEmployees