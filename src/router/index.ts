import VueRouter from 'vue-router'
import TestPage from '../pages/TestPage.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TestPage,
      props: {
        title: 'Test',
      },
    },
  ],
})
