import UserT from "./user.ts"
import GuildT from "./guild.ts"


export default interface DataT {
    status: boolean;
    message: string | null;
    user: UserT;
    guilds: GuildT[];
}
