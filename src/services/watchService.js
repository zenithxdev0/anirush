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
            const proxy = `https://gogoanime-and-hianime-proxy.vercel.app/m3u8-proxy?url=`
            const response = await axios.get(`${API_URL}/api/v2/hianime/episode/sources?animeEpisodeId=${episodeId}?server=${server}&category=${category}`);
            return response.data.data

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default watchService;


//https://aniwatch-api-ashy.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=steinsgate-3?ep=230&server=hd-2&category=dub