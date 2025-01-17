import { AxiosError, AxiosResponse } from "axios"

export interface IResponse {
    status: number | undefined,
    error?:
        | AxiosError<AxiosResponse<any,any>,any>
        | AxiosResponse<AxiosResponse<any,any>,any>
        | undefined ;
    data?: any;
}

export const handleResponse = {
    success:(res:AxiosResponse)=>{
        return {
            status:res.status,
            data:res.data,
            error: null,
        }
    },
    error:(res: AxiosError<AxiosResponse>): IResponse =>{
        if(res.message === 'Network Eror'){
            return {
                status: 500,
                error: res,
                data: null,
            }
        }else{
            return{
                status: res.response?.status,
                error: res.response?.data,
                data: null,
            }
        }
    },
}