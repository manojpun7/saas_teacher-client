import { Status } from "@/lib/global/types/global-type";

export interface IAuthData {
  teacherInstituteNumber: string | null;
  teacherEmail: string | null;
  teacherToken: string | null;
}

export interface IAuthLoginData extends IAuthData {
  password: string;
}

export default interface IAuthInitialData {
  status: Status;
  authData: IAuthData | null;
}
