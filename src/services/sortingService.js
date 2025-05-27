import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const sortingService = {
    getAzList: async (option, page) => {
        try {
            
            const response = await axios.get(`${API_URL}/api/v2/hianime/azlist/${option}?page=${page}`);

            return response.data.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default sortingService;