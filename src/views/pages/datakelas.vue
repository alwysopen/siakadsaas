<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data Kelas
            <label class=" float-right mb-0">
             <button class="btn btn-primary" @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Simpan Data Kelas" v-model="myModal" @ok="test">
             <div class="form-group">
              <label>Nama Kelas</label>
              <input class="form-control" v-model="kelas" type="text">
            </div>
          </b-modal>
          <b-modal title="Ubah Data Kelas" v-model="myModal1" @ok="ActionUbah">
             <div class="form-group">
              <label>Nama Kelas</label>
              <input class="form-control" type="text" v-model="kelas">
            </div>
          </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama Kelas</th>
                 <th>Action</th>
             </thead>
             <tbody>
                 <tr v-for="item in datakelas">
                     <td>{{item.namakelas}}</td>
                     <td> 
                         <button class="btn btn-success" @click="Ubah(item)">Ubah Data</button>
                         <button class="btn btn-danger" @click="hapusdata(item)">Hapus Data</button>
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
import kelasService from '../../services/kelas'
export default {
  name: 'datakelas',
  data () {
    return {
      myModal: false,
      myModal1: false,
      datakelas: ' ',
      kelas: '',
      id: ''

    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    async loadData () {
      var vm = this
      const result = await kelasService.list()
      vm.datakelas = result
    },
    async test () {
      var vm = this
      let data = {
        'namakelas': vm.kelas,
        'idsekolah': 3
      }
      await kelasService.create(data)
      swal('Sukses!', 'Data Sukses Di simpan', 'success')
      this.loadData()
    },
    async hapusdata (item) {
      let id = item.id
      await kelasService.delete(id)
      swal('Sukses!', 'Data Sukses Dihapus', 'success')
      this.loadData()
    },
    Ubah: function (item) {
      var vm = this
      vm.kelas = item.namakelas
      vm.id = item.id
      vm.myModal1 = true
    },
    async ActionUbah () {
      var vm = this
      let data = {
        'namakelas': vm.kelas,
        'idsekolah': 3
      }
      let id = vm.id
      await kelasService.update(data, id)
      swal('Sukses!', 'Data Sukses Diubah', 'success')
      this.loadData()
    }
  }
}
</script>
