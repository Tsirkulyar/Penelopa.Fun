import axios from "axios"
import { IText } from '../interfaces/text.interface'

const API_URL = 'http://localhost:4200'

axios.defaults.baseURL = API_URL
// в этой строчке мы указываем базовый URL

export const CarService ={
    async getAll(){
        const {data} = await axios.get<IText[]>('/posts')
        return data
    }, 
    async getById(id:string){
        const {data} =await axios.get<IText[]>('/posts', {
            params: {
                id
            }
        })
        return data[0]
    }

}