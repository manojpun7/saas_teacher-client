import { Status } from "@/lib/global/types/global-type"

export interface IAuthData{
    username: string | null,
    email: string| null
}


export default interface IAuthInitialData{
    status: Status,
    authData: IAuthData[]
}