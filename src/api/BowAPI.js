import axios from 'axios'

export const BowAPI = {
    getBows: async () => {
        const url = 'http://localhost:3333/bow'
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