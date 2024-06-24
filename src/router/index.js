import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import AuthPage from "../views/AuthPage.vue";
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import path from "path";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: "/auth",
    name: "AuthPage",
    component: AuthPage
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: "/"
  }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
  getCurrentUser()
      .then(() => {
        next();
      })
      .catch(() => {
        next({
          path: "/auth"
        });
      });
  } else {
    next();
  }
});

export default router;