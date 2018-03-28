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
          <b-modal title="Modal title" v-model="myModal" @ok="myModal = false">
           
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
