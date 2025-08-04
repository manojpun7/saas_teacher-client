import { Status } from "@/lib/global/types/global-type"

export interface IAuthData{
    instituteNumber: string | null,
    email: string| null
}

export interface IAuthLoginData extends IAuthData{
    password: string
}

export default interface IAuthInitialData{
    status: Status,
    authData: IAuthData[]
}