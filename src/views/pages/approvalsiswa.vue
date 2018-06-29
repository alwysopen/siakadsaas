<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Approval Siswa
          </div>
         <table class="table bordered-stripped">
            <thead>
                 <th>Nama</th>
                 <th>Email</th>
                 <th>Role</th>
                 <th>Foto</th>
                 <th>Action</th>
             </thead>
             <tbody>
                 <tr v-for="item in datauser">
                     <td>{{item.userdetail.namalengkap}}</td>
                     <td>{{item.email}}</td>
                     <td v-if="item.level == 1">Admin</td>
                     <td v-if="item.level == 2">Guru</td>
                     <td v-if="item.level == 3">Siswa</td>
                     <td>{{item.userdetail.foto}}</td>
                     <td> 
                        <button class="btn btn-success" @click="Approve(item)">Diterima</button>
                        <button class="btn btn-danger" @click="Decline(item)">Tidak Diterima</button>
                     </td>
                 </tr>
             </tbody>
         </table>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
import swal from 'sweetalert'
import userService from '../../services/users'
export default {
  name: 'approvalsiswa',
  data () {
    return {
      datauser: ''
    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    async loadData () {
      var vm = this
      const result = await userService.datasiswa()
      vm.datauser = result
    },
    async Decline (item) {
      let id = item.id
      let data = {
        'status': 2
      }
      await userService.updatedecline(id, data)
      swal('Sukses!', 'Data Sukses diubah', 'success')
      this.loadData()
    },
    async Approve (item) {
      let data = {
        'status': 1
      }
      let id = item.id
      await userService.update(data, id)
      swal('Sukses!', 'Data Sukses Diubah', 'success')
      this.loadData()
    }
  }
}
</script>
