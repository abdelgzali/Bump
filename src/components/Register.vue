<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email"></input>
    <br>
    <input type="password" name="password"  v-model="password" placeholder="password"></input>
    <br>
    <button @click="register" >Register</button>
  </div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: ''

    }
  },

  watch: {    // object where key is expression to watch, value is corresponding callback
    email (value) {
      console.log('email changed', value)
    }
  },

  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
    }
  }
}
</script>

<style lang="css">
</style>
