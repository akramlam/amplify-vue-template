import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import AuthPage from "../views/AuthPage.vue";
import Positions from "../views/Positions.vue";
import Complaints from "../views/Complaints.vue";
import Requests from "../views/Requests.vue";
import Users from "../views/Users.vue";
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import path from "path";

// const routes = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     component: Dashboard,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/auth",
//     name: "AuthPage",
//     component: AuthPage
//   },
//   {
//     path: "/profile",
//     name: "profile",
//     component: Profile,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/positions",
//     name: "positions",
//     component: Positions,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/complaints",
//     name: "Complaints",
//     component: Complaints,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/requests",
//     name: "Requests",
//     component: Requests,
//     meta: { requiresAuth: true }
//   },
//   {
//     path: "/users",
//     name: "Users",
//     component: Users,
//     meta: { requiresAuth: true }
//   }


// ];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
      {
      path: "/dashboard",
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
      path: "/positions",
      name: "positions",
      component: Positions,
      meta: { requiresAuth: true }
    },
    {
      path: "/complaints",
      name: "Complaints",
      component: Complaints,
      meta: { requiresAuth: true }
    },
    {
      path: "/requests",
      name: "Requests",
      component: Requests,
      meta: { requiresAuth: true }
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
      meta: { requiresAuth: true }
    }
    ]
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