<template>
    <div id="login">
       <div class="global-container">
            <div class="card login-form">
            <div class="card-body">
                <h3 class="card-title text-center">Login</h3>
                <div class="card-text">
                  <error v-if="error" :error="error"/>
                    <form @submit.prevent="handleSubmit">
                        <!-- to error: add class "has-danger" -->
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="username" v-model="username" class="form-control form-control-sm" id="username">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <a href="#" style="float:right;font-size:12px;">Forgot password?</a>
                            <input type="password" v-model="password" class="form-control form-control-sm" id="password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Login</button>
                        
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
import Error from './Error'

export default {
    name : 'Login',
    components:{
        Error
    },
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
                localStorage.setItem('token',response.data.data);
                this.$store.dispatch('user',response.data.user);
                window.location.href = '/'
           }catch (e){
               this.error = 'Invalide username/password'
          }
        }
    }
}
</script>
<style>
.global-container{
	height:100%;
	display: flex;
	align-items: center;
	justify-content: center;

}

form{
	padding-top: 10px;
	font-size: 14px;
	margin-top: 30px;
}

.card-title{ font-weight:300; }

.btn{
	font-size: 14px;
	margin-top:20px;
}


.login-form{ 
	width:330px;
	margin:20px;
}

.sign-up{
	text-align:center;
	padding:20px 0 0;
}

.alert{
	margin-bottom:-30px;
	font-size: 13px;
	margin-top:20px;
}
</style>