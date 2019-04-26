import axios from 'axios'

export const ArcherAPI = {
    getArchers: async () => {
        const url = 'http://localhost:3333/archer'
        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (error) {
            const response = error.response.data
            response.error = true
            return response
        }
    }
}