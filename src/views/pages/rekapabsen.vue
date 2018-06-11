<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Rekap Absen
            <label class=" float-right mb-0">
             <button class="btn btn-primary" @click="myModal = true">Tambah Data</button>
            </label>
          </div>
           <b-modal title="Tambah Rekap Absen" v-model="myModal" @ok="myModal = false">
            <div class="form-group">
              <label>Nama</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Ijin</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>Alfa</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>Sakit</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Masuk</label>
              <input class="form-control" type="text">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>Ijin</th>
                 <th>Alfa</th>
                 <th>Sakit</th>
                 <th>Masuk</th>
             </thead>
             <tbody>
                 <tr>
                     <td></td>
                 </tr>
             </tbody>
         </table>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'rekapabsen',
  data () {
    return {
      myModal: false
    }
  }
}
</script>
