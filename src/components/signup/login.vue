<template>
    <section id="login">
        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-lg-8 d-flex align-items-end mb-5">
                    <h5 class="text-white" style="margin-left: 24px;">ONBOARDING Application</h5>
                </div>
                <p class="successMessage" ref = "success">{{successMessage}}</p>
                <div class="col-lg-4 login">
                    <div class="text-center pb-5">
                        <h3>Login</h3>
                    </div>
                    <form action="dashboard/dashboard.php">
                        <div class="form-group mb-3">
                            <input type="text" class="form-control" id="email" placeholder="Email" v-model="loggedUsers.email">
                        </div>
                        <div class="form-group mb-2">
                            <input type="password" class="form-control" id="password" placeholder="Password" v-model="loggedUsers.password">
                        </div>
                        <div class="form-group form-check mb-5">
                            <input type="checkbox" class="form-check-input" id="check1">
                            <label class="form-check-label" for="check1">Keep me signed in</label>
                        </div>
                        <div class="text-center mb-5">
                            <button type="submit" class="btn btn-dark btn-block text-white" @click="submit">Login</button>
                        </div>
                    </form>
                    <ul class="forgot d-flex down justify-content-between">
                        <li>
                            <a href="#">Forgot Password?</a>
                        </li>
                        <li>
                            <router-link to="/" tag="a"><i class="fa fa-users"></i> Sign Up Here</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            loggedUsers : {
                email : "",
                password : "",
            },
            successMessage : "",
            usersRegisterData : {}
        }
    },
    methods : {
        submit(event){
            event.preventDefault();
            this.$store.dispatch("login",this)
            console.log(this.$store.state.notAuthorised)
        }
    },
    mounted(){
        let parsedData = JSON.parse(localStorage.getItem("users"))

        let id = parsedData.length - 1

       

        let UsersRegisterData = parsedData[`${id}`]
        this.usersRegisterData = UsersRegisterData
        console.log(this.usersRegisterData)
    }
}
</script>
