public export default interface UserT {
    success: boolean;
    message: string | null;
    id: string;
    username: string;
    avatar: string;
    avatar_decoration: string | null;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    banner_color: string | null;
    accent_color: string | null;
    locale: string;
    mfa_enabled: string;
    premium_type: boolean;
}
