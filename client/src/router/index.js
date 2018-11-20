import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import EditSong from '@/components/EditSong'

import NewSong from '@/components/NewSong'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/new',
      name: 'NewSong',
      component: NewSong
    },
    {
      path: '/songs/:id',
      name: 'EditSong',
      component: EditSong
    }
  ]
})
