import employeeModel from "../model/employee.model.js";

const getEmployees = async (req, res) => {
    try {
        const employeesData = await employeeModel.find().lean();
        return res.status(200).json(employeesData)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export default getEmployees