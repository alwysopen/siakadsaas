export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Reporting',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Rangkuman Nilai',
      url: '/rangkumannilai',
      icon: 'fa fa-book'
    },
    {
      name: 'Rekap Absen',
      url: '/rekapabsen',
      icon: 'fa fa-book'
    },
    {
      title: true,
      name: 'Transaction',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Master Data',
      url: '/base',
      icon: 'fa fa-database',
      children: [
        {
          name: 'Data Siswa',
          url: '/masterdata/datasiswa',
          icon: 'fa fa-circle-thin'
        },
        {
          name: 'Data Guru',
          url: '/masterdata/dataguru',
          icon: 'fa fa-circle-thin'
        },
        {
          name: 'Data Users',
          url: '/masterdata/datausers',
          icon: 'fa fa-circle-thin'
        }
      ]
    },
    {
      name: 'Management User',
      url: '/base',
      icon: 'fa fa-users',
      children: [
        {
          name: 'Approval Siswa',
          url: '/managementuser/approvalsiswa',
          icon: 'fa fa-circle-thin'
        },
        {
          name: 'Approval Guru',
          url: '/managementuser/approvalguru',
          icon: 'fa fa-circle-thin'
        }
      ]
    },
    {
      name: 'E-Learning',
      url: '/elearning',
      icon: 'fa fa-university',
      children: [
        {
          name: 'Tugas',
          url: '/elearning/tugas',
          icon: 'fa fa-circle-thin'
        },
        {
          name: 'Jadwal Pelajaran',
          url: '/elearning/jadwalpelajaran',
          icon: 'fa fa-circle-thin'
        }
      ]
    },
    {
      name: 'E-SPP',
      url: '/espp',
      icon: 'fa fa-dollar',
      children: [
        {
          name: 'Monitoring SPP',
          url: '/espp/monitoring',
          icon: 'fa fa-circle-thin'
        },
        {
          name: 'Approval Pembayaran',
          url: '/espp/accpembayaran',
          icon: 'fa fa-circle-thin',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'History Transaksi',
          url: '/espp/historytransaksi',
          icon: 'fa fa-circle-thin'
        }
      ]
    },
    {
      name: 'Log Activity',
      url: '/logactivity',
      icon: 'fa fa-calendar'
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Notif SPP',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Notif Approval User',
          url: '/notifications/badges',
          icon: 'icon-bell'
        }
      ]
    }
  ]
}
