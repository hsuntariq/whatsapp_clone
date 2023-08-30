import axios from 'axios';
import { base_url } from '../../assets/base_url';

const url = `${base_url}/user`;

const registerUser = async (userData) => {
    const response = await axios.post(`${url}/register`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data
}

const getAllUsers = async() => {
    const response = await axios.get(`${url}/get-all-users`);
    return response.data;
}


const getStatuses = async () => {
    const response = await axios.get(`${url}/get-statuses`);
    return response.data;
}


export const authService = {
    registerUser,
    getAllUsers,
    getStatuses
}