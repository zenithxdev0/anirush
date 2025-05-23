import axios from "axios";
const API_URL = 'https://aniwatch-api-ashy.vercel.app'; //


//import.meta.env.VITE_API_URL

const watchService = {
    getEpisodes: async (animeId) => {
        try {
            
            const response = await axios.get(`${API_URL}/api/v2/hianime/anime/${animeId}/episodes`);
            return response.data.data;

        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getServers: async(episodeId) => {

        // console.log(episodeId);
        try {
            
            const response = await axios.get(`${API_URL}/api/v2/hianime/episode/servers?animeEpisodeId=${episodeId}`);
            
            return response.data.data;
            
        } catch (error) {
           console.log(error);
           throw error; 
        }
    },

getVideoSources: async (episodeId, server, category) => {
    try {
        const proxy = `http://localhost:8080/`;

        const organicPath = `http://localhost:4000/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${server}&category=${category}`
        const originalPath = `/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}&server=${server}&category=${category}`;
        const fullUrl = `${proxy}${originalPath}`;

        const response = await axios.get(organicPath);
       // console.log(fullUrl);
        console.log(response);

        return response.data.data;
    } catch (error) {
        throw error;
    }
}

}

export default watchService;


//https://aniwatch-api-ashy.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=steinsgate-3?ep=230&server=hd-2&category=dub