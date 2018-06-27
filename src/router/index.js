import Vue from 'vue'
import VueRouter from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
// Views - Components
// Views - Buttons
import StandardButtons from '@/views/buttons/StandardButtons'
import ButtonGroups from '@/views/buttons/ButtonGroups'
import Dropdowns from '@/views/buttons/Dropdowns'
import SocialButtons from '@/views/buttons/SocialButtons'

// Views - Icons
import Flags from '@/views/icons/Flags'
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Notifications
import Alerts from '@/views/notifications/Alerts'
import Badges from '@/views/notifications/Badges'
import Modals from '@/views/notifications/Modals'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'
import datasiswa from '@/views/pages/datasiswa'
import datakelas from '@/views/pages/datakelas'
import dataguru from '@/views/pages/dataguru'
import datauser from '@/views/pages/datausers'
import approvalsiswa from '@/views/pages/approvalsiswa'
import approvalguru from '@/views/pages/approvalguru'
import elearningtugas from '@/views/pages/elearningtugas'
import jadwalpelajaran from '@/views/pages/jadwalpelajaran'

import esppmonitoring from '@/views/pages/esppmonitoring'
import accpembayaran from '@/views/pages/accpembayaran'
import historytransaksi from '@/views/pages/espphistorymonitoring'
import rangukmannilai from '@/views/pages/rangkumannilai'
import databuku from '@/views/pages/databuku'
import rekapabsen from '@/views/pages/rekapabsen'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { requiresAuth: true }
        },
        {
          path: 'rangkumannilai',
          name: 'Rangkuman Nilai',
          component: rangukmannilai,
          meta: { requiresAuth: true }
        },
        {
          path: 'rekapabsen',
          name: 'Rekap Absen',
          component: rekapabsen,
          meta: { requiresAuth: true }
        },
        {
          path: 'masterdata',
          redirect: '/masterdata/datasiswa',
          name: 'Master Data',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'datasiswa',
              name: 'Data Siswa',
              component: datasiswa,
              meta: { requiresAuth: true }
            },
            {
              path: 'databuku',
              name: 'Data Buku',
              component: databuku,
              meta: { requiresAuth: true }
            },
            {
              path: 'datakelas',
              name: 'Data Kelas',
              component: datakelas,
              meta: { requiresAuth: true }
            },
            {
              path: 'dataguru',
              name: 'Data Guru',
              component: dataguru,
              meta: { requiresAuth: true }
            },
            {
              path: 'datausers',
              name: 'Data User',
              component: datauser,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'managementuser',
          redirect: '/managementuser/approvalsiswa',
          name: 'Management User',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'approvalsiswa',
              name: 'Approval Siswa',
              component: approvalsiswa,
              meta: { requiresAuth: true }
            },
            {
              path: 'approvalguru',
              name: 'Approval Guru',
              component: approvalguru,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'espp',
          redirect: '/espp/monitoring',
          name: 'E-SPP',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'monitoring',
              name: 'Monitoring SPP',
              component: esppmonitoring,
              meta: { requiresAuth: true }
            },
            {
              path: 'accpembayaran',
              name: 'Approval Pembayaran',
              component: accpembayaran,
              meta: { requiresAuth: true }
            },
            {
              path: 'historytransaksi',
              name: 'History Transaksi',
              component: historytransaksi,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'elearning',
          redirect: '/elearning/tugas',
          name: 'E-Learning',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'tugas',
              name: 'Tugas Siswa',
              component: elearningtugas,
              meta: { requiresAuth: true }
            },
            {
              path: 'jadwalpelajaran',
              name: 'Jadwal Pelajaran',
              component: jadwalpelajaran,
              meta: { requiresAuth: true }
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons,
              meta: { requiresAuth: true }
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups,
              meta: { requiresAuth: true }
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'social-buttons',
              name: 'Social Buttons',
              component: SocialButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
