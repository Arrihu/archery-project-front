import axios from 'axios'

const BASE_API_URL = 'http://localhost:3333'

export const ArcherAPI = {
    getArchers: async () => {
        const URL = `${BASE_API_URL}/archer`
        try {
            const response = await axios.get(URL)
            return response.data.data
        } catch (error) {
            const response = error.response.data
            response.error = true
            return response
        }
    }
}