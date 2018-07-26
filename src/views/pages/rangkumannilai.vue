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
            <div class="form-group Typeahead">
              <label>Nama</label>
               <i class="fa fa-spinner fa-spin" v-if="loading"></i>
                <template v-else>
                  <i class="fa fa-search" v-show="isEmpty"></i>
                  <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
                </template>
               <!-- the input field -->
                <input type="text"
                      placeholder="..."
                      autocomplete="off"
                      v-model="query"
                       class="Typeahead__input"
                      @keydown.down="down"
                      @keydown.up="up"
                      @keydown.enter="hit"
                      @keydown.esc="reset"
                      @blur="reset"
                      @input="update"/>

                <!-- the list -->
                <ul v-show="hasItems">
                  <!-- for vue@1.0 use: ($item, item) -->
                  <li v-for="(item, $item) in items" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
                    <span v-text="item.name"></span>
                  </li>
                </ul>
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
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import VueTypeahead from 'vue-typeahead'
export default {
  name: 'rangukmannilai',
  extends: VueTypeahead,
  data () {
    return {
      myModal: false,
      nama: '',
      uts: '',
      ukk: '',
      tugas: '',
      ulanganharian: '',
      total: '',
      datanilai: '',
      src: 'http://localhost:3030/siswa',
      // The data that would be sent by request
      // (optional)
      // Limit the number of items which is shown at the list
      // (optional)
      limit: 5,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },

      // The minimum character length needed before triggering
      // (optional)
      minChars: 3,

      // Highlight the first item in the list
      // (optional)
      selectFirst: false,

      // Override the default value (`q`) of query parameter name
      // Use a falsy value for RESTful query
      // (optional)
      queryParamName: 'nama'
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
    onHit (item) {
      window.location.href = 'http://twitter.com/' + item.screen_name
    },

    // The callback function which is triggered when the response data are received
    // (optional)
    prepareResponseData (data) {
      // data = ...
      return data
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


<style scoped>
.Typeahead {
  position: relative;
}
.Typeahead__input {
  width: 100%;
  font-size: 14px;
  color: #2c3e50;
  line-height: 1.42857143;
  box-shadow: inset 0 1px 4px rgba(0,0,0,.4);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  font-weight: 300;
  padding: 12px 26px;
  border: none;
  border-radius: 22px;
  letter-spacing: 1px;
  box-sizing: border-box;
}
.Typeahead__input:focus {
  border-color: #4fc08d;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px #4fc08d;
}
.fa-times {
  cursor: pointer;
}
i {
  float: right;
  position: relative;
  top: 30px;
  right: 29px;
  opacity: 0.4;
}
ul {
  position: absolute;
  padding: 0;
  margin-top: 8px;
  min-width: 100%;
  background-color: #fff;
  list-style: none;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0, 0.25);
  z-index: 1000;
}
li {
  padding: 10px 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
li:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
li:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: 0;
}
span {
  display: block;
  color: #2c3e50;
}
.active {
  background-color: #3aa373;
}
.active span {
  color: white;
}
.name {
  font-weight: 700;
  font-size: 18px;
}
.screen-name {
  font-style: italic;
}
</style>