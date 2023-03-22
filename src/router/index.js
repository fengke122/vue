import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import userIndex from "@/views/userIndex.vue";
import UserDetil from '@/views/UserDetil';
import Test from "@/views/Test.vue";
import Changepsw from "@/views/Changepsw.vue";
import MyBlog from "@/views/MyBlog.vue";
import UserBlogEdit from "@/views/UserBlogEdit.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/userindex',
    name: 'userindex',
    component: userIndex
  },
  {
    path: '/userdetil',
    name: 'userdetil',
    component: UserDetil
  },
  {
    path: "/test",
    nmae: 'test',
    component: Test
  },
  {
    path: '/security',
    name: 'security',
    component: Changepsw
  },
  {
    path: '/myblog',
    name: 'myblog',
    component: MyBlog
  },
  {
    path: '/userblogeditor',
    name: 'userblogeditor',
    component: UserBlogEdit
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
