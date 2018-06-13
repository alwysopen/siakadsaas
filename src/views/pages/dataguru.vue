<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data Guru
            <label class=" float-right mb-0">
               <button class="btn btn-primary" @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Ubah Data Guru" v-model="myModal1" @ok="ActionUbah">
            <div class="form-group">
              <label>Nama Guru</label>
              <input class="form-control" type="text" v-model="namaguru">
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea class="form-control" v-model="alamat" ></textarea>
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <select class="form-control" type="text" v-model="kelas">
                <option v-for="item in datakelas" :value="item.id">{{item.namakelas}}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Jenis Kelamin</label>
              <select class="form-control" type="text" v-model="jeniskelamin">
                <option valule="1">Laki-Laki</option>
                 <option valule="0">Perempuan</option>
              </select>
            </div>
             <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" v-model="email">
            </div>
             <div class="form-group">
              <label>Nomor telpon</label>
              <input class="form-control" type="text" v-model="nomortelpon">
            </div>
             <div class="form-group">
              <label>foto</label>
              <input class="form-control" type="file" id="foto" ref="foto" v-on:change="handleFileUpload()">
            </div>
          </b-modal>
          <b-modal title="Input Data Guru" v-model="myModal" @ok="test">
            <div class="form-group">
              <label>Nama Guru</label>
              <input class="form-control" type="text" v-model="namaguru">
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea class="form-control" v-model="alamat" ></textarea>
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <select class="form-control" type="text" v-model="kelas">
                <option v-for="item in datakelas" :value="item.id">{{item.namakelas}}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Jenis Kelamin</label>
              <select class="form-control" type="text" v-model="jeniskelamin">
                <option valule="1">Laki-Laki</option>
                 <option valule="0">Perempuan</option>
              </select>
            </div>
             <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email" v-model="email">
            </div>
             <div class="form-group">
              <label>Nomor telpon</label>
              <input class="form-control" type="text" v-model="nomortelpon">
            </div>
             <div class="form-group">
              <label>foto</label>
              <input class="form-control" type="file" id="file" ref="file" v-on:change="handleFileUpload()">
            </div>
          </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>Alamat</th>
                 <th>Jenis Kelamin</th>
                 <th>Email</th>
                 <th>Nomor Telpon</th>
                 <th>Foto</th>
                 <th>Action</th>
             </thead>
             <tbody>
                 <tr v-for="item in dataguru">
                     <td>{{item.nama}}</td>
                     <td>{{item.alamat}}</td>
                     <td>{{item.jeniskelamin}}</td>
                     <td>{{item.email}}</td>
                     <td>{{item.nomortelpon}}</td>
                     <td><img :src="apiurl + '/' + item.foto" height="100" width="100"></td>
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
import guruService from '../../services/dataguru'
import kelasService from '../../services/kelas'
import apiendpoint from '../../api/endpoint'
export default {
  name: 'dataguru',
  data () {
    return {
      myModal: false,
      myModal1: false,
      dataguru: ' ',
      datakelas: '',
      kelas: '',
      namaguru: '',
      jeniskelamin: '',
      nomortelpon: '',
      email: '',
      file: '',
      file2: '',
      alamat: '',
      apiurl: apiendpoint.apiendpoint,
      id: ''
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
      const result = await guruService.list()
      vm.dataguru = result
    },
    async loadDatakelas () {
      var vm = this
      const result = await kelasService.list()
      vm.datakelas = result
    },
    async test () {
      let formData = new FormData()
      formData.append('foto', this.file)
      formData.append('foto', 'gurufoto/' + this.file.name)
      formData.append('alamat', this.alamat)
      formData.append('email', this.email)
      formData.append('nama', this.namaguru)
      formData.append('jeniskelamin', this.jeniskelamin)
      formData.append('nomortelpon', this.nomortelpon)
      formData.append('idsekolah', 3)
      formData.append('idkelas', this.kelas)
      await guruService.create(formData)
      this.loadData()
    },
    async hapusdata (item) {
      let id = item.id
      await guruService.delete(id)
      this.loadData()
    },
    Ubah: function (item) {
      var vm = this
      vm.id = item.id
      vm.alamat = item.alamat
      vm.email = item.email
      vm.namaguru = item.nama
      vm.jeniskelamin = item.jeniskelamin
      vm.nomortelpon = item.nomortelpon
      vm.kelas = item.idkelas
      vm.myModal1 = true
    },
    async ActionUbah () {
      var vm = this
      if (this.file === '') {
        let data = {
          'alamat': vm.alamat,
          'email': vm.email,
          'nama': vm.namaguru,
          'jeniskelamin': vm.jeniskelamin,
          'nomortelpon': vm.nomortelpon,
          'idkelas': vm.kelas,
          'idsekolah': 3
        }
        let id = vm.id
        await guruService.update(data, id)
        this.loadData()
      } else {
        let formData = new FormData()
        formData.append('foto', this.file2)
        formData.append('foto', 'siswafoto/' + this.file2.name)
        formData.append('alamat', this.alamat)
        formData.append('email', this.email)
        formData.append('nama', this.namasiswa)
        formData.append('jeniskelamin', this.jeniskelamin)
        formData.append('nomortelpon', this.nomortelpon)
        formData.append('idsekolah', 3)
        formData.append('idkelas', 1)
        let id = vm.id
        await guruService.UpdateFoto(formData, id)
        this.loadData()
      }
    }
  }
}
</script>
