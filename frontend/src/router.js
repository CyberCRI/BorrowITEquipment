import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Swipe_equip from './components/Swipe_equip.vue'
import Loans from './components/Loans.vue'
import Fail from './components/Fail.vue'
import Utils from './components/Utils.vue'
import Redirect from './components/Redirect.vue'
import Returns from './components/Returns.vue'
import Swipe_user_card from './components/Swipe_user_card.vue'
import ReturnEquip from './components/ReturnEquip.vue'
import Apercu_equip from './components/Apercu_equip.vue'
import Error_NFCID from './components/Error_NFCID.vue'
import Loading from './components/Loading.vue'
import Error_CONDITION from './components/Error_CONDITION.vue'
import Error_STATUS from './components/Error_STATUS.vue'
import Error_USEDBY from './components/Error_USEDBY.vue'
import Success_RETURN from './components/Success_RETURN.vue'
import Success_LOAN from './components/Success_LOAN.vue'
import Error_login from './components/Error_login.vue'
import ReturnEquipp from './components/ReturnEquipp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
      {
          path: '/Swipe_equip',
          name: 'Swipe_equip',
          component: Swipe_equip
      },
      {
          path: '/Loans',
          name: 'Loans',
          component: Loans
      },
      {
          path: '/Fail',
          name: 'Fail',
          component: Fail
      },
      {
          path: '/Utils',
          name: 'Utils',
          component: Utils
      },
      {
          path: '/Redirect',
          name: 'Redirect',
          component: Redirect
      },
      {
          path: '/Returns',
          name: 'Returns',
          component: Returns
      },
      {
          path: '/Swipe_user_card',
          name: 'Swipe_user_card',
          component: Swipe_user_card
      },
      {
          path: '/ReturnEquip',
          name: 'ReturnEquip',
          component: ReturnEquip
      },
      {
          path: '/Apercu_equip',
          name: 'Apercu_equip',
          component: Apercu_equip
      },
      {
          path: '/Error_NFCID',
          name: 'Error_NFCID',
          component: Error_NFCID
      },
      {
          path: '/Loading',
          name: 'Loading',
          component: Loading
      },
      {
          path: '/Error_CONDITION',
          name: 'Error_CONDITION',
          component: Error_CONDITION
      },
      {
          path: '/Error_STATUS',
          name: 'Error_STATUS',
          component: Error_STATUS
      },
      {
          path: '/Error_USEDBY',
          name: 'Error_USEDBY',
          component: Error_USEDBY
      },
      {
          path: '/Success_RETURN',
          name: 'Success_RETURN',
          component: Success_RETURN
      },
      {
          path: '/Success_LOAN',
          name: 'Success_LOAN',
          component: Success_LOAN
      },
      {
          path: '/Error_login',
          name: 'Error_login',
          component: Error_login
      },
      {
          path: '/ReturnEquipp',
          name: 'ReturnEquipp',
          component: ReturnEquipp
      }
  ]
})