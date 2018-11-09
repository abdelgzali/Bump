import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Notes from '@/components/Notes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'notes',
      component: Notes
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
