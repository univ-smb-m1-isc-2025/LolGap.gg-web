<script setup></script>

<template>
    <div class="whats-new">
        <h2>What's new</h2>
        <div class="content">
            <h3>Preview Last Match</h3>
            <h4 class="feature">Feature</h4>
            <p>
                Dans l'écran d'accueil, vous pouvez désormais voir le dernier match joué par l'utilisateur, 
                Le tout avec une petite description du match, statistiques et le résultat tant attendu de la partie.

            </p>
        </div>
        <div class="content">
            <h3>Patch Type Queue in preview</h3>
            <h4 class="bug-fix">Bug fix</h4>
            <p>
                Bug reglé, quand au chargement du preview des last games, le type de queue n'était pas pris en compte,
                donc les mêmes récap de game étaient affichés pour tous les types de queue.
            </p>
        </div>
        <div class="content">
            <h3>Connexion & Riot game</h3>
            <h4 class="feature">Feature</h4>
            <p>
                La connexion est désormais disponible, liant votre compte Riot Games à votre compte LoLGap.gg (données publics utilisées uniquement).
            </p>
        </div>
    </div>
</template>

<style scoped>
    .whats-new {
        background-color: var(--color-frame-background-soft);
        border-radius: 15px;
        max-width: fit-content;
        grid-area: 1 / 1 / 6 / 3; 
        margin: 2%;
    }

    .whats-new h2 {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 2%;
        margin-left: 5%;
        border-bottom: 1px solid var(--color-primary-white);
        line-height: 2.5;
        width: 90%;
    }
    
    .whats-new .content {
        margin: 1%;
    }

    .whats-new .content h3 {
        font-size: 0.9rem;
        font-weight: bold;
        margin: 1%;
        padding: 1%;
        border-radius: 5px;
        background-color: var(--color-markdown-title);
        display: inline-block;
        cursor: pointer;
    }
    
    .whats-new .content p {
        font-size: 0.8rem;
        margin: 1%;
        padding: 1%;
        text-align: justify;
    }

    .whats-new .content h4 {
        font-size: 0.8rem;
        margin: 1%;
        padding: 0.5% 2%;
        border-radius: 15px;
        display: inline-block;
    }

    .whats-new .content .bug-fix {
        background-color: rgba(255, 0, 0, 0.5);
    }

    .whats-new .content .feature {
        background-color: rgba(0, 255, 0, 0.5);
    }
    
    
</style>