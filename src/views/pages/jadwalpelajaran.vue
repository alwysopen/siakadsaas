<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Jadwal Pelajaran
            <label class=" float-right mb-0">
             <button class="btn btn-primary" @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Simpan Jadwal Pelajaran" v-model="myModal" @ok="test">
            <div class="form-group">
              <label>Mata Pelajaran</label>
              <input class="form-control" v-model="matapelajaran" type="text">
            </div>
            <div class="form-group">
              <label>Jam Masuk</label>
              <input class="form-control" v-model="jammasuk" type="time">
            </div>
            <div class="form-group">
              <label>Jam Keluar</label>
              <input class="form-control" v-model="jamkeluar" type="time">
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <select class="form-control" type="text" v-model="kelas">
                <option v-for="item in datakelas" :value="item.id">{{item.namakelas}}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Hari</label>
              <input class="form-control" v-model="hari" type="text">
            </div>
          </b-modal>
          <b-modal title="Ubah Jadwal Pelajaran" v-model="myModal1" @ok="ActionUbah">
            <div class="form-group">
              <label>Mata Pelajaran</label>
              <input class="form-control" v-model="matapelajaran" type="text">
            </div>
            <div class="form-group">
              <label>Jam Masuk</label>
              <input class="form-control" v-model="jammasuk" type="time">
            </div>
            <div class="form-group">
              <label>Jam Keluar</label>
              <input class="form-control" v-model="jamkeluar" type="time">
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <select class="form-control" type="text" v-model="kelas">
                <option v-for="item in datakelas" :value="item.id">{{item.namakelas}}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Hari</label>
              <input class="form-control" v-model="hari" type="text">
            </div>
          </b-modal>
         <table class="table bordered-stripped">
             <thead>
                <th>Mata Pelajaran</th>
                <th>Jam Masuk</th>
                <th>Jam Keluar</th>
                <th>Hari</th>
                <th>Action</th>
             </thead>
             <tbody>
                 <tr v-for="item in datajadwalpelajaran">
                     <td>{{item.jadwalpelajaran}}</td>
                     <td>{{item.jammasuk}}</td>
                     <td>{{item.jamkeluar}}</td>
                     <td>{{item.hari}}</td>
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
import jadwalService from '../../services/jadwalpelajaran'
import kelasService from '../../services/kelas'
export default {
  name: 'jadwalpelajaran',
  data () {
    return {
      myModal: false,
      myModal1: false,
      datajadwalpelajaran: ' ',
      matapelajaran: '',
      jammasuk: '',
      jamkeluar: '',
      hari: '',
      datakelas: '',
      kelas: '',
      id: ''

    }
  },
  mounted: function () {
    this.loadData()
    this.loadDatakelas()
  },
  methods: {
    async loadData () {
      var vm = this
      const result = await jadwalService.list()
      vm.datajadwalpelajaran = result
    },
    async loadDatakelas () {
      var vm = this
      const result = await kelasService.list()
      vm.datakelas = result
    },
    async test () {
      var vm = this
      let data = {
        'jadwalpelajaran': vm.matapelajaran,
        'jammasuk': vm.jammasuk,
        'jamkeluar': vm.jamkeluar,
        'hari': vm.hari,
        'idkelas': vm.kelas,
        'idsekolah': 3
      }
      await jadwalService.create(data)
      swal('Sukses!', 'Data Sukses Di simpan', 'success')
      this.loadData()
    },
    async hapusdata (item) {
      let id = item.id
      await jadwalService.delete(id)
      swal('Sukses!', 'Data Sukses Dihapus', 'success')
      this.loadData()
    },
    Ubah: function (item) {
      var vm = this
      vm.matapelajaran = item.jadwalpelajaran
      vm.jammasuk = item.jammasuk
      vm.jamkeluar = item.jamkeluar
      vm.hari = item.hari
      vm.kelas = item.idkelas
      vm.id = item.id
      vm.myModal1 = true
    },
    async ActionUbah () {
      var vm = this
      let data = {
        'jadwalpelajaran': vm.matapelajaran,
        'jammasuk': vm.jammasuk,
        'jamkeluar': vm.jamkeluar,
        'hari': vm.hari,
        'idkelas': vm.kelas,
        'idsekolah': 3
      }
      let id = vm.id
      await jadwalService.update(data, id)
      swal('Sukses!', 'Data Sukses Diubah', 'success')
      this.loadData()
    }
  }
}
</script>
