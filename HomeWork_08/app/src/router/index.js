import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage.vue";
import BlogDetailsPage from "@/pages/BlogDetailsPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage,
  },
  {
    path: '/blog',
    name: "'blog'",
    component: BlogPage,
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: ProjectDetailsPage,
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: BlogDetailsPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: 'NotFoundPage',
    component: NotFoundPage,
  },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});

export default router;