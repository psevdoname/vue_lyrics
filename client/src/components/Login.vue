<template>
  <div>
    <h1>Login</h1>
    <input type='username' name='username' placeholder="username" v-model="username"/><br>
    <input type='email' name='email' placeholder="email" v-model="email"/><br>
    <input type='password' name='password' placeholder="password" v-model="password"/><br>
    <button @click='login'>Login</button>
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
    async login () {
      
      try{
        const response = await authentication.login({
        username: this.username,
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
        
        
      } catch (error) {
        // this.error = error.response.data.error
        console.log(error)
      }
      
    //   console.log(response.data)
      // console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
