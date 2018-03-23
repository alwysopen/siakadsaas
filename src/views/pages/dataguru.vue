<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data Guru
            <label class=" float-right mb-0">
             <button class="btn btn-primary">Tambah Data</button>
            </label>
          </div>
         <table class="table bordered-stripped">
             <thead>
                 <th>Nama</th>
                 <th>Alamat</th>
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
  name: 'dataguru'
}
</script>
