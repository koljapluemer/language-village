import { createWebHistory, createRouter } from "vue-router";


import Home from "@/components/Home.vue";
import GameDraw from "@/components/GameDraw.vue";
import GameMatchDrawings from "@/components/GameMatchDrawings.vue";

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

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;