<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <form @submit.prevent="submit">
              <b-input-group class="mb-3" :class="status($v.username)">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" placeholder="Username"  v-model.trim="$v.username.$model">
              </b-input-group>
               <div class="error" v-if="!$v.username.required">Field is required</div>
                <div class="error" v-if="!$v.username.minLength">Name must have at least {{$v.username.$params.minLength.min}} letters.</div>
               <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>@</b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" placeholder="Email" v-model.trim="$v.email.$model">
              </b-input-group>
              <div class="error" v-if="!$v.email.required">Field is required</div>
              <div class="error" v-if="!$v.email.email">Name must be email</div>
               <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-home"></i></b-input-group-text>
                </b-input-group-prepend>
                    <bs-input type="text" class="form-control" placeholder="Insert a fruit" :datalist="persons">
                    </bs-input>
                </b-input-group>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" placeholder="Password">
              </b-input-group>

              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" placeholder="Repeat password">
              </b-input-group>

              <b-button variant="success" block type="submit">Create Account</b-button>
              </form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AutoComplete from '../../components/autocomplete.vue'
import BsInput from 'vue-strap/src/input'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  components: { AutoComplete, BsInput },
  data () {
    return {
      username: '',
      email: '',
      persons: [
        'kambing',
        'unta'
      ]
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('hello')
      } else {
        // do your submit logic here
        console.log('word')
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    status (validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    }
  }
}
</script>
