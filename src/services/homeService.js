import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;


const homeService =  {
    getHome: async () => {
       
        try {
        const response = await axios.get(`${API_URL}/api/v2/hianime/home`);
        const data = await response.data
        return data.data;

        } catch (error) {
            throw error;
        }

    }
}

export default homeService;