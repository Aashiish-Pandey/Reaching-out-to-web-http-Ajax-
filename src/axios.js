import axios from 'axios';

const instance = axios.create({

    baseURL:'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorisation'] = 'AUTH TOKEN of instance axios'

export default instance;