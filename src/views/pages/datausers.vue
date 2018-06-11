<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data User
            <label class=" float-right mb-0">
              <button class="btn btn-primary"  @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Input Data User" v-model="myModal" @ok="myModal = false">
             <div class="form-group">
              <label>Username</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>password</label>
              <input class="form-control" type="password">
            </div>
             <div class="form-group">
              <label>role</label>
              <input class="form-control" type="text">
            </div>
         </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>Email</th>
                 <th>Role</th>
                 <th>Foto</th>
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
  name: 'datausers',
  data () {
    return {
      myModal: false
    }
  }
}
</script>
