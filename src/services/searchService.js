import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const searchService = {

    getSearchSuggestion: async (query) => {
        try {
                
            const response = await axios.get(`${API_URL}/api/v2/hianime/search/suggestion?q=${query}`);

            return response.data.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    getSearchResults: async (query, page) => {
        try {
            
            const response = await axios.get(`${API_URL}/api/v2/hianime/search?q=${query}&page=${page}`);

            return response.data.data;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

};


export default searchService;