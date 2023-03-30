import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Window from "../views/WindowView.vue";

const routes = [
  { path: "/home", component: Window },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
