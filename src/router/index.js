import { createWebHistory, createRouter } from "vue-router";
// import Home from "";
import sheba from "../components/sheba";
import enas from "../components/enas";
import sha from "../components/Sha";



const routes = [

  {
    path: "/sheba",
    name: "sheba",
    component: sheba,
  },
  {
    path: "/enas",
    name: "enas",
    component: enas,
  },
  {
    path: "/sha",
    name: "sha",
    component: sha,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;