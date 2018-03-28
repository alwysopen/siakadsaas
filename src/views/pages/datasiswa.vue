<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data Siswa
            <label class=" float-right mb-0">
             <button class="btn btn-primary" @click="myModal = true">Tambah Data</button>
            </label>
          </div>
          <b-modal title="Ubah Data Siswa" v-model="myModal1" @ok="myModal1 = false">
             <div class="form-group">
              <label>Nama Siswa</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea class="form-control" ></textarea>
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Jenis Kelamin</label>
              <select class="form-control" type="text">
                <option valule="laki-laki">Laki-Laki</option>
                 <option valule="perempuan">Perempuan</option>
              </select>
            </div>
             <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email">
            </div>
             <div class="form-group">
              <label>Nomor telpon</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>foto</label>
              <input class="form-control" type="file">
            </div>
          </b-modal>
          <b-modal title="Input Data Siswa" v-model="myModal" @ok="myModal = false">
             <div class="form-group">
              <label>Nama Siswa</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea class="form-control" ></textarea>
            </div>
            <div class="form-group">
              <label>Kelas</label>
              <input class="form-control" type="text">
            </div>
            <div class="form-group">
              <label>Jenis Kelamin</label>
              <select class="form-control" type="text">
                <option valule="laki-laki">Laki-Laki</option>
                 <option valule="perempuan">Perempuan</option>
              </select>
            </div>
             <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="email">
            </div>
             <div class="form-group">
              <label>Nomor telpon</label>
              <input class="form-control" type="text">
            </div>
             <div class="form-group">
              <label>foto</label>
              <input class="form-control" type="file">
            </div>
          </b-modal>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>Alamat</th>
                 <th>Kelas</th>
                 <th>Jenis Kelamin</th>
                 <th>Email</th>
                 <th>Nomor Telpon</th>
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
  name: 'datasiswa',
  data () {
    return {
      myModal: false
    }
  }
}
</script>
