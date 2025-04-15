export interface MatchDetailsDTO {
    metadata: MatchMetadataDTO
    info: MatchInfoDTO
}

export interface MatchMetadataDTO {
    matchId: string
    participants: string[]
}

export interface MatchInfoDTO {
    gameCreation: number
    gameDuration: number
    gameMode: string
    participants: ParticipantDTO[]
}

export interface ParticipantDTO {
    kills: number
    deaths: number
    assists: number
    win: boolean
    puuid: string
    riotIdGameName: string
    riotIdTagline: string
    championName: string
    championId: string
}

export interface Participant {
    puuid: string
    summonerName: string
    championId: number
    teamId: number
    win: boolean
    kills: number
    deaths: number
    assists: number
    championName: string
    totalDamageDealtToChampions: number
    totalDamageTaken: number
    goldEarned: number
    visionScore: number
    summoner1Id: number
    summoner2Id: number
    items: number[]
    perks: Perks
}

export interface Perks {
    primaryStyle: number
    subStyle: number
    selectedPerkIds: number[]
}

export interface MatchDTO {
    metadata: {
        dataVersion: string
        matchId: string
        participants: string[]
    }
    info: {
        gameCreation: number
        gameDuration: number
        gameEndTimestamp: number
        gameId: number
        gameMode: string
        gameName: string
        gameStartTimestamp: number
        gameType: string
        gameVersion: string
        mapId: number
        participants: {
            assists: number
            baronKills: number
            bountyLevel: number
            champExperience: number
            champLevel: number
            championId: number
            championName: string
            championTransform: number
            consumablesPurchased: number
            damageDealtToBuildings: number
            damageDealtToObjectives: number
            damageDealtToTurrets: number
            damageSelfMitigated: number
            deaths: number
            detectorWardsPlaced: number
            doubleKills: number
            dragonKills: number
            firstBloodAssist: boolean
            firstBloodKill: boolean
            firstTowerAssist: boolean
            firstTowerKill: boolean
            gameEndedInEarlySurrender: boolean
            gameEndedInSurrender: boolean
            goldEarned: number
            goldSpent: number
            individualPosition: string
            inhibitorKills: number
            inhibitorTakedowns: number
            inhibitorsLost: number
            item0: number
            item1: number
            item2: number
            item3: number
            item4: number
            item5: number
            item6: number
            itemsPurchased: number
            killingSprees: number
            kills: number
            lane: string
            largestCriticalStrike: number
            largestKillingSpree: number
            largestMultiKill: number
            longestTimeSpentLiving: number
            magicDamageDealt: number
            magicDamageDealtToChampions: number
            magicDamageTaken: number
            neutralMinionsKilled: number
            nexusKills: number
            nexusTakedowns: number
            nexusLost: number
            objectivesStolen: number
            objectivesStolenAssists: number
            participantId: number
            pentaKills: number
            physicalDamageDealt: number
            physicalDamageDealtToChampions: number
            physicalDamageTaken: number
            profileIcon: number
            puuid: string
            quadraKills: number
            riotIdName: string
            riotIdTagline: string
            role: string
            sightWardsBoughtInGame: number
            spell1Casts: number
            spell2Casts: number
            spell3Casts: number
            spell4Casts: number
            summoner1Casts: number
            summoner1Id: number
            summoner2Casts: number
            summoner2Id: number
            summonerId: string
            summonerLevel: number
            summonerName: string
            teamEarlySurrendered: boolean
            teamId: number
            teamPosition: string
            timeCCingOthers: number
            timePlayed: number
            totalDamageDealt: number
            totalDamageDealtToChampions: number
            totalDamageShieldedOnTeammates: number
            totalDamageTaken: number
            totalHeal: number
            totalHealsOnTeammates: number
            totalMinionsKilled: number
            totalTimeCCDealt: number
            totalTimeSpentDead: number
            totalUnitsHealed: number
            tripleKills: number
            trueDamageDealt: number
            trueDamageDealtToChampions: number
            trueDamageTaken: number
            turretKills: number
            turretTakedowns: number
            turretsLost: number
            unrealKills: number
            visionScore: number
            visionWardsBoughtInGame: number
            wardsKilled: number
            wardsPlaced: number
            win: boolean
        }[]
        platformId: string
        queueId: number
        teams: {
            bans: {
                championId: number
                pickTurn: number
            }[]
            objectives: {
                baron: {
                    first: boolean
                    kills: number
                }
                champion: {
                    first: boolean
                    kills: number
                }
                dragon: {
                    first: boolean
                    kills: number
                }
                inhibitor: {
                    first: boolean
                    kills: number
                }
                riftHerald: {
                    first: boolean
                    kills: number
                }
                tower: {
                    first: boolean
                    kills: number
                }
            }
            teamId: number
            win: boolean
        }[]
        tournamentCode: string
    }
} 