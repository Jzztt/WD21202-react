import axios from "axios"
export  interface IStudent {
    name: string;
    email: string;
    mssv: string;
}

const API_URL = "http://localhost:3000";
const createStudent = async (studentData: IStudent) => {
    try {
        await axios.post(`${API_URL}/students`, studentData)
    } catch (error) {
        console.log(error)
    }
}
export const ProductService = {
    createStudent
}