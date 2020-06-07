import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const Blog = () => import('views/blog/Blog');
const Album = () => import('views/album/Album');
const Project = () => import('views/project/Project');

const routes = [
  {
    path: '/',
    redirect: '/blog'
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/album',
    component: Album
  },
  {
    path: '/project',
    component: Project
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
