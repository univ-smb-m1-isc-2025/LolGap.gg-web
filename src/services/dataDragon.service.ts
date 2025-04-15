export class DataDragonService {
    private static instance: DataDragonService
    private readonly baseUrl = 'https://ddragon.leagueoflegends.com/cdn/14.3.1'

    private constructor() {}

    public static getInstance(): DataDragonService {
        if (!DataDragonService.instance) {
            DataDragonService.instance = new DataDragonService()
        }
        return DataDragonService.instance
    }

    getChampionImage(championId: string): string {
        return `${this.baseUrl}/img/champion/${championId}.png`
    }

    getChampionSplash(championId: string): string {
        return `${this.baseUrl}/img/champion/splash/${championId}.jpg`
    }

    getChampionLoading(championId: string): string {
        return `${this.baseUrl}/img/champion/loading/${championId}.jpg`
    }

    getItemImage(itemId: string): string {
        return `${this.baseUrl}/img/item/${itemId}.png`
    }

    getSpellImage(spellId: string): string {
        return `${this.baseUrl}/img/spell/${spellId}.png`
    }

    getProfileIcon(iconId: string): string {
        return `${this.baseUrl}/img/profileicon/${iconId}.png`
    }

    getRankImage(tier: string): string {
        return `/assets/rank_logo/${tier}.png`
    }
}

export const dataDragonService = DataDragonService.getInstance() 