import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'c010fbcb9b784dd7a0d388569556961e'
    }
})