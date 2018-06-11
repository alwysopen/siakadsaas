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
          <b-modal title="Tambah Tugas" v-model="myModal" @ok="myModal = false">
             <div class="form-group">
              <label>Judul Tugas</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>Deskripsi</label>
              <textarea class="form-control"></textarea>
            </div>
             <div class="form-group">
              <label>attachment</label>
              <input class="form-control" type="file">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Judul</th>
                 <th>deskripsi</th>
                 <th>attachment</th>
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
  name: 'elearningtugas',
  data () {
    return {
      myModal: false
    }
  }
}
</script>
