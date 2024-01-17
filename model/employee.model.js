import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({

    "employee_id": {
        type: String,
        default: "",
    },
    "first_name": {
        type: String,
        default: "",
    },
    "last_name": {
        type: String,
        default: "",
    },
    "department": {
        type: String,
        default: "",
    },
    "Address": {
        type: String,
        default: "",
    },
    "dob": {
        type: String,
        default: "",
    },
    "salary": {
        type: String,
        default: "",
    }
}, {
    versionKey: false
}
)

const employeeModel = mongoose.model('Employee', employeeSchema);
export default employeeModel