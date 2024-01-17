import employeeModel from "../model/employee.model.js";

const addEmployee = async (req, res) => {
    try {
        const { employee_id, first_name, last_name, department, Address, dob, salary } = req.body

        const newEmployee = new employeeModel({
            employee_id: employee_id,
            first_name: first_name,
            last_name: last_name,
            department: department,
            Address: Address,
            dob: dob,
            salary: salary
        })

        await newEmployee.save();
        return res.status(200).json({ message: "Employee successfully added" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
export default addEmployee