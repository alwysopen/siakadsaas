<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data User
            <label class=" float-right mb-0">
              <button class="btn btn-primary"  @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Input Data User" v-model="myModal" @ok="test">
             <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" v-model="email">
            </div>
             <div class="form-group">
              <label>Password</label>
              <input class="form-control" type="password" v-model="password">
            </div>
             <div class="form-group">
              <label>Level</label>
              <input class="form-control" type="text" v-model="level">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>Email</th>
                 <th>Level</th>
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
  name: 'datausers',
  data () {
    return {
      myModal: false,
      password: '',
      email: '',
      status: '',
      level: '',
      playerid: '',
      statususer: '',
      datauser: ''
    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    async loadData () {
      var vm = this
      const result = await userService.list()
      vm.datauser = result
    },
    async test () {
      var vm = this
      let data = {
        'email': vm.email,
        'idsekolah': 3,
        'userdetail': 2,
        'status': 0,
        'level': 1,
        'playerid': 0,
        'password': vm.password,
        'statususer': 0
      }
      await userService.create(data)
      swal('Sukses!', 'Data Sukses Di simpan', 'success')
      this.loadData()
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
