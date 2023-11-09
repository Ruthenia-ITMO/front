import axios from "axios";
export default class IllegalTradeService{
    static async getAll(limit= 9, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response
    }

    static async getById(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos/' + id);
        return response
    }
}