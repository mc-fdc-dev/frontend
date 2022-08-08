import UserT from "./user.ts"


export default interface DataT {
    status: boolean;
    message: string | null;
    user: UserT;
}
