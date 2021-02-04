<template>
  <div id="login" style="margin-top: 120px;">
       <div class="global-container">
            <div class="card login-form">
            <div class="card-body">
                <h3 class="card-title text-center">Login</h3>
                <div class="card-text">
                  <error v-if="error" :error="error"/>
                    <form @submit.prevent="handleSubmit">
                        <!-- to error: add class "has-danger" -->
                        <div class="form-group">
                            <label style="float: left;">Username</label>
                            <input type="username" v-model="username" class="form-control form-control-sm" id="username">
                        </div>
                        <div class="form-group">
                            <label style="float: left;">Password</label>
                            <a href="#" style="float:right;font-size:12px;">Forgot password?</a>
                            <input type="password" v-model="password" class="form-control" id="password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" style="font-size: 15px;">Login</button>
                        
                        <div class="sign-up">
                            Don't have an account? <router-link to="/register"> Create Account</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : 'Login',
   
    
    data (){
        return {
            username : '',
            password : '',
            error : ''
        }
    },
     methods : {
      async handleSubmit(){
          try{
                const response = await axios.post('login',{
                username : this.username,
                password : this.password
          });
                localStorage.setItem('token',response.data.data.data);
                this.$store.commit("setAuthentication",true)
                this.$store.dispatch('user',response.data.data.data);
                window.location.href = '/'
           }catch (e){
               this.error = 'Invalide username/password'
          }
        }
    }

}
</script>
