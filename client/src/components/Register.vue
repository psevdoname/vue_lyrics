<template>
  <div>
    <h1>Register</h1>
    <input type='username' name='username' placeholder="username" v-model="username"/><br>
    <input type='email' name='email' placeholder="email" v-model="email"/><br>
    <input type='password' name='password' placeholder="password" v-model="password"/><br>
    <button @click='register'>Register</button>
  </div>

</template>

<script>
import authentication from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        await authentication.register({
          username: this.username,
          email: this.email,
          password: this.password
        })
        this.$router.push({
          path: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
