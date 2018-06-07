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
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>UTS</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>UKK</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>Tugas</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Ulangan Harian</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Total</label>
              <input class="form-control" type="text">
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
  name: 'rangukmannilai',
  data () {
    return {
      myModal: false
    }
  }
}
</script>
