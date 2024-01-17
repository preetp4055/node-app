import employeeModel from "../model/employee.model.js";

const sortedEmployees = async (req, res) => {
    try {
        const employeesData = await employeeModel.find({}).lean();

        if (employeesData.length == 0) {
            return res.status(200).json({ message: "No employees found" })
        }
        const sortedEmployeesData = employeesData.sort((a, b) => a.salary - b.salary);
        return res.status(200).json(sortedEmployeesData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export default sortedEmployees