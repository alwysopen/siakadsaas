<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Jadwal Pelajaran
            <label class=" float-right mb-0">
             <button class="btn btn-primary">Tambah Data</button>
            </label>
          </div>
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
  name: 'elearningjadwal'
}
</script>
