<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col xs="12">
        <b-card>
            <div slot="header">
            Data User
            <label class=" float-right mb-0">
             <button class="btn btn-primary">Tambah Data</button>
            </label>
          </div>
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
  name: 'datausers'
}
</script>
