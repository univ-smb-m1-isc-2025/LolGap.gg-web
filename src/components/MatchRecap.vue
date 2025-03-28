<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref, onMounted } from 'vue';
import leagueService from '@/services/leagueService';

const authStore = useAuthStore();

const matchRecap = ref([]);

onMounted(async () => {
   let matches = await leagueService.getMatchHistoryAllQueues();
   for (let match of matches) {
        let matchDetails = await leagueService.getMatchDetails(match);
        matchRecap.value.push(matchDetails);
   }
});

const getPlayerWin = (match) => {
    for (let i = 0; i < match.info.participants.length; i++) {
        if (match.info.participants[i].puuid === authStore.user.riotPuuid) {
            return match.info.participants[i].win;
        }
    }
}

const isMe = (puuid) => {
    return puuid === authStore.user.riotPuuid;
}

</script>

<template>
    <div class="match_recap_container">
        <h2 class="match_recap_title">LAST GAME !</h2>
        <div v-for="match in matchRecap.slice(0, 2)" :key="match.id" class="match_recap_content">
            <template v-if="match.info.participants.length <= 10">
                <div class="team_final">
                    <h2 style="color: var(--victory);"> WINNER TEAM </h2>
                    <div class="match_recap_participant_team1 team_container">
                    <div v-for="participant in match.info.participants.filter(p => p.win)" :key="participant.puuid" class="one_player_container">
                        <div class="match_recap_player_info">
                            <span v-if="isMe(participant.puuid)" class="match_recap_participant_name participant_win me">{{ participant.riotIdGameName }} #{{ participant.summonerLevel }}</span>
                            <span v-else class="match_recap_participant_name participant_win">{{ participant.riotIdGameName }} #{{ participant.riotIdTagline }}</span>
                            <span class="match_recap_participant_score">{{ participant.kills }} / {{ participant.deaths }} / {{ participant.assists }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="team_final">
                    <h2 style="color: var(--defeat);"> LOSER TEAM </h2>
                    <div class="match_recap_participant_team2 team_container">
                        <div v-for="participant in match.info.participants.filter(p => !p.win)" :key="participant.puuid" class="one_player_container">
                        <div class="match_recap_player_info">
                            <span v-if="isMe(participant.puuid)" class="match_recap_participant_name participant_lose me">{{ participant.riotIdGameName }}</span>
                            <span v-else class="match_recap_participant_name participant_lose">{{ participant.riotIdGameName }} #{{ participant.riotIdTagline }}</span>
                            <span class="match_recap_participant_score">{{ participant.kills }} / {{ participant.deaths }} / {{ participant.assists }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
    .match_recap_title {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 10px;
        width: 90%;
        line-height: 2.5;
        margin-top: 2%;
        border-bottom: 1px solid var(--color-primary-white);
    }

    .match_recap_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: 3 / 3 / 6 / 6;
        background-color: var(--color-frame-background-soft);
        border-radius: 15px;
        margin: 2%;
    }

    .one_player_container {
        margin-top: 15px;
    }

    .match_recap_content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-radius: 15px;
        padding: 10px;
        font-size: 0.6rem;
        line-height: 1.8;
    }

    .match_recap_participant_tagline {
        font-size: 0.8rem;
        padding: 5px;
        border-radius: 5px;
    }

    .team_container {
        padding: 20px;
        padding-top: 0px;
        width: 100%;
    }

    .match_recap_participant_team1 {
        justify-content: flex-start;
    }

    .match_recap_participant_team2 {
        justify-content: flex-end;
    }

    .me {
        background-color: var(--color-primary-white) !important;
        color: black;
        padding: 5px;
        border-radius: 5px;
    }

    .match_recap_participant_name {
        font-size: 0.9rem;
        font-weight: bold;
        background-color: var(--color-markdown-title);
        padding: 5px;
        border-radius: 5px;
    }

    .match_recap_player_info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .team_final {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
    }

    .match_recap_participant_score {
        font-size: 0.7rem;
        font-weight: bold;
    }
    
</style>
