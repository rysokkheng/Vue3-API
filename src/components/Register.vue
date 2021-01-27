<template>
    <div id="register">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card">
                    <h2 class="card-title text-center">Register</h2>
                    <div class="card-body py-md-4">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="fullname" id="fullname" placeholder="Full Name" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="username" id="username" placeholder="User Name" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" v-model="email" id="email" placeholder="Email" autocomplete="off">
                            </div> 
                             <div class="form-group">
                                <input type="phone" class="form-control" v-model="phone" id="phone" placeholder="Phone" autocomplete="off">
                            </div>                           
                            <div class="form-group">
                                <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control"  v-model="c_password" id="c_password" placeholder="confirm-password">
                            </div>
                            
                            <div class="d-flex flex-row align-items-center justify-content-between">
                                <router-link to="/login">Login</router-link>
                                <button class="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
     </div>
</div>

</template>
<script>
export default {
    name:'Register',
    data (){
        return {
            fullname : '',
            username : '',
            email : '',
            phone : '',
            c_password : ''

        }
    },
    methods: {
        handleSubmit() {
        console.log("sssssssssss");
        }
    }
}
</script>
<style>
h2{
  padding-top: 1.5rem;
}
a{
  color: #333;
}
a:hover{
  color: #da5767;
  text-decoration: none;
}
.card{
  border: 0.40rem solid #f8f9fa;
  top: 10%;
}
.form-control{
  background-color: #f8f9fa;
  padding: 20px;
  padding: 25px 15px;
  margin-bottom: 1.3rem;
}

.form-control:focus {

    color: #000000;
    background-color: #ffffff;
    border: 3px solid #da5767;
    outline: 0;
    box-shadow: none;

}

.btn{
  padding: 0.6rem 1.2rem;
  background: #da5767;
  border: 2px solid #da5767;
}
.btn-primary:hover {

    
    background-color: #df8c96;
    border-color: #df8c96;
  transition: .3s;

}
</style>