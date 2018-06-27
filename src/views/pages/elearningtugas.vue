<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Tugas
            <label class=" float-right mb-0">
             <button class="btn btn-primary" @click="myModal = true">Tambah Tugas</button>
            </label>
          </div>
          <b-modal title="Tambah Tugas" v-model="myModal" @ok="test">
             <div class="form-group">
              <label>Judul Tugas</label>
              <input class="form-control" type="text" v-model="judultugas">
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <select class="form-control" type="text" v-model="kelas">
                <option v-for="item in datakelas" :value="item.id">{{item.namakelas}}</option>
              </select>
            </div>
             <div class="form-group">
              <label>Deskripsi</label>
              <textarea class="form-control" v-model="deskripsi"></textarea>
            </div>
             <div class="form-group">
              <label>attachment</label>
              <input class="form-control" type="file" id="file" ref="file" v-on:change="handleFileUpload()">
            </div>
         </b-modal>
         <b-modal title="Ubah Tugas" v-model="myModal1" @ok="ActionUbah">
             <div class="form-group">
              <label>Judul Tugas</label>
              <input class="form-control" type="text" v-model="judultugas">
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <select class="form-control" type="text" v-model="kelas">
                <option v-for="item in datakelas" :value="item.id">{{item.namakelas}}</option>
              </select>
            </div>
             <div class="form-group">
              <label>Deskripsi</label>
              <textarea class="form-control" v-model="deskripsi"></textarea>
            </div>
             <div class="form-group">
              <label>attachment</label>
              <input class="form-control" type="file" id="file" ref="file" v-on:change="handleFileUpload()">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Judul</th>
                 <th>deskripsi</th>
                 <th>attachment</th>
                 <th>Action</th>
             </thead>
             <tbody>
                 <tr v-for ="item in datatugas">
                     <td>{{item.judul}}</td>
                     <td>{{item.deskripsi}}</td>
                     <td>{{item.attachment}}</td>
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
import datatugas from '../../services/datatugas'
import kelasService from '../../services/kelas'
import apiendpoint from '../../api/endpoint'
export default {
  name: 'elearningtugas',
  data () {
    return {
      myModal: false,
      myModal1: false,
      judultugas: '',
      deskripsi: '',
      file: '',
      file2: '',
      apiurl: apiendpoint.apiendpoint,
      swaler: swal,
      datatugas: ''
    }
  },
  mounted: function () {
    this.loadData()
    this.loadDatakelas()
  },
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      this.file2 = this.$refs.foto.files[0]
      console.log(this.file2)
    },
    async loadData () {
      var vm = this
      const result = await datatugas.list()
      vm.datatugas = result
    },
    async loadDatakelas () {
      var vm = this
      const result = await kelasService.list()
      vm.datakelas = result
    },
    async test () {
      let formData = new FormData()
      formData.append('attachment', this.file)
      formData.append('attachment', 'attachmenttugas/' + this.file.name)
      formData.append('judul', this.judultugas)
      formData.append('deskripsi', this.deskripsi)
      formData.append('idsekolah', 3)
      formData.append('idkelas', this.kelas)
      await datatugas.create(formData)
      this.loadData()
    },
    async hapusdata (item) {
      let id = item.id
      await datatugas.delete(id)
      this.loadData()
    },
    Ubah: function (item) {
      var vm = this
      vm.id = item.id
      vm.deskripsi = item.deskripsi
      vm.judultugas = item.judul
      vm.kelas = item.idkelas
      vm.myModal1 = true
    },
    async ActionUbah () {
      var vm = this
      if (this.file === '') {
        let data = {
          'deskripsi': vm.deskripsi,
          'judul': vm.judultugas,
          'idkelas': vm.kelas,
          'idsekolah': 3
        }
        let id = vm.id
        await datatugas.update(data, id)
        this.loadData()
      } else {
        let formData = new FormData()
        formData.append('attachment', this.file)
        formData.append('attachment', 'attachmenttugas/' + this.file.name)
        formData.append('judul', this.judultugas)
        formData.append('deskripsi', this.deskripsi)
        formData.append('idsekolah', 3)
        formData.append('idkelas', this.kelas)
        let id = vm.id
        await datatugas.UpdateFoto(formData, id)
        this.loadData()
      }
    }
  }
}
</script>
