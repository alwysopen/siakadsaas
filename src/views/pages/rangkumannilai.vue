<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Rangkuman Nilai
            <label class=" float-right mb-0">
             <button class="btn btn-primary" @click="myModal = true">Tambah Data</button>
            </label>
          </div>
         <b-modal title="Tambah Rangkuman Nilai" v-model="myModal" @ok="myModal = false">
            <div class="form-group">
              <label>Nama</label>
              <input class="form-control" type="text" v-model="nama">
            </div>
            <div class="form-group">
              <label>UTS</label>
              <input class="form-control" type="text" v-model="uts">
            </div>
             <div class="form-group">
              <label>UKK</label>
              <input class="form-control" type="text" v-model="ukk">
            </div>
             <div class="form-group">
              <label>Tugas</label>
              <input class="form-control" type="text" v-model="tugas">
            </div>
            <div class="form-group">
              <label>Ulangan Harian</label>
              <input class="form-control" type="text" v-model="ulanganharian">
            </div>
            <div class="form-group">
              <label>Total</label>
              <input class="form-control" type="text" v-model="total">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>UTS</th>
                 <th>UKK</th>
                 <th>Tugas</th>
                 <th>Ulangan Harian</th>
                 <th>Total</th>
             </thead>
             <tbody>
                 <tr v-for="item in datanilai">
                     <td>{{item.nama}}</td>
                     <td>{{item.uts}}</td>
                     <td>{{item.ukk}}</td>
                     <td>{{item.tugas}}</td>
                     <td>{{item.ulanganharian}}</td>
                     <td>{{item.total}}</td>
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
import rangukmannilaiService from '../../services/rangkumannilai'
export default {
  name: 'rangukmannilai',
  data () {
    return {
      myModal: false,
      nama: '',
      uts: '',
      ukk: '',
      tugas: '',
      ulanganharian: '',
      total: '',
      datanilai: ''
    }
  },
  mounted: function () {
    this.loadData()
  },
  methods: {
    async loadData () {
      var vm = this
      const result = await rangukmannilaiService.list()
      vm.datanilai = result
    },
    async test () {
      var vm = this
      let data = {
        'namakelas': vm.kelas,
        'idsekolah': 3
      }
      await rangukmannilaiService.create(data)
      swal('Sukses!', 'Data Sukses Di simpan', 'success')
      this.loadData()
    },
    async hapusdata (item) {
      let id = item.id
      await rangukmannilaiService.delete(id)
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
      await rangukmannilaiService.update(data, id)
      swal('Sukses!', 'Data Sukses Diubah', 'success')
      this.loadData()
    }
  }
}
</script>
