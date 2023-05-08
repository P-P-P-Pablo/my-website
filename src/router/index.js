import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Window from "../views/WindowView.vue";
import Test from "../views/TestView.vue";

const routes = [
  { path: "/home", component: Window },
  { path: "/", component: Home },
  { path:"/test", component: Test}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
