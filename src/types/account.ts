export interface Account {
    id: number
    username: string
    email: string
    riotGameName: string
    riotTagLine: string
    summonerId: string
    accountId: string
}

export interface LeagueAccount {
    id: string
    accountId: string
    puuid: string
    summonerName: string
    profileIconId: number
    summonerLevel: number
    revisionDate: number
}

export interface LoginCredentials {
    username: string
    password: string
}

export interface LoginResponse {
    token: string
    user: Account
} 