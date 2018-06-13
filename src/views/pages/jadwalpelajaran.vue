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
              <label>Nama Buku</label>
              <input class="form-control" v-model="namabuku" type="text">
            </div>
            <div class="form-group">
              <label>Nama Penulis</label>
              <input class="form-control" v-model="namapenulis" type="text">
            </div>
            <div class="form-group">
              <label>Nama Penerbit</label>
              <input class="form-control" v-model="namapenerbit" type="text">
            </div>
            <div class="form-group">
              <label>Tahun terbit</label>
              <input class="form-control" v-model="tahunterbit" type="text">
            </div>
          </b-modal>
          <b-modal title="Ubah Jadwal Pelajaran" v-model="myModal1" @ok="ActionUbah">
            <div class="form-group">
              <label>Nama Buku</label>
              <input class="form-control" v-model="namabuku" type="text">
            </div>
            <div class="form-group">
              <label>Nama Penulis</label>
              <input class="form-control" v-model="namapenulis" type="text">
            </div>
            <div class="form-group">
              <label>Nama Penerbit</label>
              <input class="form-control" v-model="namapenerbit" type="text">
            </div>
            <div class="form-group">
              <label>Tahun terbit</label>
              <input class="form-control" v-model="tahunterbit" type="text">
            </div>
          </b-modal>
         <table class="table bordered-stripped">
             <thead>
                <th>Nama Buku</th>
                <th>Nama Penulis</th>
                <th>Nama Penerbit</th>
                <th>Tahun Terbit</th>
                <th>Action</th>
             </thead>
             <tbody>
                 <tr v-for="item in databuku">
                     <td>{{item.namabuku}}</td>
                     <td>{{item.penulis}}</td>
                     <td>{{item.penerbit}}</td>
                     <td>{{item.tahunterbit}}</td>
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
import bukuService from '../../services/databuku'
export default {
  name: 'databuku',
  data () {
    return {
      myModal: false,
      myModal1: false,
      databuku: ' ',
      namabuku: '',
      namapenerbit: '',
      namapenulis: '',
      tahunterbit: '',
      id: ''

    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    async loadData () {
      var vm = this
      const result = await bukuService.list()
      vm.databuku = result
    },
    async test () {
      var vm = this
      let data = {
        'namabuku': vm.namabuku,
        'penerbit': vm.namapenerbit,
        'penulis': vm.namapenulis,
        'tahunterbit': vm.tahunterbit,
        'idsekolah': 3
      }
      await bukuService.create(data)
      swal('Sukses!', 'Data Sukses Di simpan', 'success')
      this.loadData()
    },
    async hapusdata (item) {
      let id = item.id
      await bukuService.delete(id)
      swal('Sukses!', 'Data Sukses Dihapus', 'success')
      this.loadData()
    },
    Ubah: function (item) {
      var vm = this
      vm.namabuku = item.namabuku
      vm.namapenerbit = item.penerbit
      vm.namapenulis = item.penulis
      vm.tahunterbit = item.tahunterbit
      vm.id = item.id
      vm.myModal1 = true
    },
    async ActionUbah () {
      var vm = this
      let data = {
        'namabuku': vm.namabuku,
        'penerbit': vm.namapenerbit,
        'penulis': vm.namapenulis,
        'tahunterbit': vm.tahunterbit,
        'idsekolah': 3
      }
      let id = vm.id
      await bukuService.update(data, id)
      swal('Sukses!', 'Data Sukses Diubah', 'success')
      this.loadData()
    }
  }
}
</script>
