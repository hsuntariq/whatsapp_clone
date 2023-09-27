import axios from 'axios';
import { base_url } from '../../assets/base_url';
const url = `${base_url}/chat`;

const addChat = async (data) => {
    const response = await axios.post(`${url}/add-chat`,data);
    return response.data;
}

const addMessage = async (data) => {
    const response = await axios.post(`${url}/add-message`, data);
    return response.data;
}


const chatService = {
    addChat,
    addMessage
}

export default chatService;