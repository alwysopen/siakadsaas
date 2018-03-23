<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Tugas
            <label class=" float-right mb-0">
             <button class="btn btn-primary">Tambah Tugas</button>
            </label>
          </div>
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
  name: 'elearningtugas'
}
</script>
