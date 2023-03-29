import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Projects from "../views/ProjectsView.vue";
import CV from "../views/CVView.vue";
import Window from "../views/WindowView.vue";

const routes = [
  { path: "/", component: Window },
  { path: "/cv", component: CV },
  { path: "/projects", component: Projects },
  { path: "/test", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
