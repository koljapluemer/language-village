import { createWebHistory, createRouter } from "vue-router";


import Home from "@/components/Home.vue";
import GameDraw from "@/components/GameDraw.vue";
import GameMatchDrawings from "@/components/GameMatchDrawings.vue";
import GameSentencesFreeTranslate from "@/components/GameSentencesFreeTranslate.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/game/draw",
        name: "GameDraw",
        component: GameDraw,
    },
    {
        path: "/game/matchdrawings",
        name: "GameMatchDrawings",
        component: GameMatchDrawings,
    },
    {
        path: "/game/sentencesfreetranslate",
        name: "GameSentencesFreeTranslate",
        component: GameSentencesFreeTranslate,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;