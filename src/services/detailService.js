import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const detailService = {

    getDetail: async (animeId) => {
        try {
            
            const response = await axios.get(`${API_URL}/api/v2/hianime/anime/${animeId}`);

            console.log(response);
            return response.data

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default detailService;