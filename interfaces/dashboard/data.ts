import UserT from "./user"
import GuildT from "./guild"


export default interface DataT {
    status: boolean;
    message: string | null;
    user: UserT;
    guilds: GuildT[];
}
