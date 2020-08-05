import Vue from 'vue'
import Router from 'vue-router'
import TableMain from '@/components/TableMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: TableMain
    }
  ]
})
