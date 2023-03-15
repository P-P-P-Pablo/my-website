import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Projects from "../views/ProjectsView.vue";
import CV from "../views/CVView.vue";
import Test from "../views/TestView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cv", component: CV },
  { path: "/projects", component: Projects },
  { path: "/test", component: Test },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
