<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Jadwal Pelajaran
            <label class=" float-right mb-0">
             <button class="btn btn-primary"  @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Tambah Jadwal" v-model="myModal" @ok="myModal = false">
            <div class="form-group">
              <label>Hari</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Mata Pelajaran</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>Kelas</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>Jam Masuk</label>
              <input class="form-control" type="time">
            </div>
             <div class="form-group">
              <label>Jam Selesai</label>
              <input class="form-control" type="time">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Hari</th>
                 <th>Mata Pelajaran</th>
                 <th>Kelas</th>
                 <th>Jam Masuk</th>
                 <th>Jam Mulai</th>
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
  name: 'elearningjadwal',
  data () {
    return {
      myModal: false
    }
  }
}
</script>
