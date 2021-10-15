import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    children: [
      {
        path: 'childone',
        name: 'ChildOne',
        component: ()=> import('../views/Child1.vue')
      },{
        path: 'childtwo',
        name: 'ChildTwo',
        component: ()=> import('../views/Child2.vue')
      }
    ],
    component: () => import('../views/About.vue')
  },{
    path: '/pageone',
    name: 'PageOne',
    beforeEnter: (to, from, next) => {
      // console.log(to,from);
      next();
    },
    component: ()=> import('../views/Page1.vue')
  },{
    path: '/pagetwo',
    name: 'PageTwo',
    alias: '/detail',
    component: ()=> import('../views/Page2.vue')
  },{
    path: '/pagethree/:username',
    name: 'PageThree',
    component: ()=> import('../views/Page3.vue')
  },{
    path: '/pagefour',
    name: 'PageFour',
    component: ()=> import('../views/Page4.vue')
  },{
    path: '/redirect/:username',
    redirect:'/pagethree/:username'
  },{
    path: '*',
    component: ()=> import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})  

export default router
