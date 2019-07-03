<template>
    <div>
        <section id="signup">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-7 d-flex align-items-center justify-content-center mt-40 text-white">
                   <!-- <div>

                   </div> -->
                </div>
                <div class="col-md-5 signup">
                    <div class="text-center pb-5">
                        <h1>SignUp</h1>
                    </div>
                    <form>
                         <div class="form-group mb-4">
                                <label>Title</label>
                                <select class="form-control" v-model="users.title_label" @change="$v.users.title_label.$touch()" :class="{error : $v.users.title_label.$error}">
                                <option value = "Mr">Mr</option>
                                <option  value = "Mrs">Mrs</option>
                                <option  value = "Miss">Miss</option>
                                <option  value = "Dr">Dr</option>
                                <option  value = "Prof">Prof</option>
                                </select>
                         </div>
                    <div class="form-row">
                        <div class="form-group col-md-6 mb-4">
                            <input type="text" class="form-control" id="first_name" :placeholder="$v.users.first_name.$error ? 'First Name Required' :'First Name' " 
                            @blur="$v.users.first_name.$touch()" :class="{error : $v.users.first_name.$error}" v-model="users.first_name" >
                        </div>
                        <div class="form-group col-md-6  mb-4">
                            <input type="text" class="form-control" id="last_name" :placeholder="$v.users.last_name.$error ? 'Last Name Required' :'Last Name'" v-model="users.last_name" 
                             @blur="$v.users.last_name.$touch()" :class="{error : $v.users.last_name.$error}">
                        </div>
                    </div>
                        <div class="form-group" @change="$v.users.gender.$touch()" :class="{error : $v.users.gender.$error}">
                            <div class="form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" v-model="users.gender">
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check-inline" style="margin-left: 100px;">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" v-model="users.gender">
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                        </div>
                   
                        <div class="form-group mb-4">
                            <input type="text" class="form-control" id="phone_no" :placeholder="$v.users.phone_no.$error ? 'Phone number Must Be A Number And 11 Digits' :'Phone Number'" v-model="users.phone_no"
                             @blur="$v.users.phone_no.$touch()" :class="{error : $v.users.phone_no.$error}">
                        </div>
                        <div class="form-group  mb-4">
                            <input type="email" class="form-control" id="Email" placeholder="Email" v-model="users.email" :placeholder="$v.users.email.$error ? 'Email Required and Must Be Valid' :'Email'"
                            @blur="$v.users.email.$touch()" :class="{error : $v.users.email.$error}">
                        </div>    
                 
                        <div class="form-group mb-4">
                            <input type="password" class="form-control" id="password" placeholder="Password" v-model="users.password" :placeholder="$v.users.password.$error ? 'Password Required And Greater than 6' :'Password'"
                             @blur="$v.users.password.$touch()" :class="{error: $v.users.password.$error}">
                        </div>
                        <div class="form-group form-check mb-4" @change="yes">
                            <input type="checkbox" class="form-check-input" id="check2">
                            <label class="form-check-label" for="check2">I agree to the <a href="#">terms and conditions</a></label>
                        </div>
                        <div class="text-center mb-5">
                            <button type="submit" class="btn btn-dark btn-block text-white" @click="getUsers" ref="button">Sign Up</button>
                        </div>
                    </form>
                    <ul class="border-top forgot d-flex down justify-content-around">
                        <li>
                            <span>Already have an account?</span>
                        </li>
                        <li>
                           <router-link to="/login" tag="a"><i class="fa fa-user"></i> login Here</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
import { required,numeric,minLength,email } from 'vuelidate/lib/validators'

export default {
    data : function(){
        return {
        users : {
            title_label : "",
            first_name : "",
            last_name : "",
            email : "",
            password : "", 
            gender : "",
            phone_no : "",
            },
        }
    },
    validations : {
        users : {
            first_name : {
                required,
            },
            last_name : {
                required,
            },
            gender : {
                required,
            },
            phone_no : {
                required,
                numeric,
                min : minLength(11)
            },
            email : {
                email,
                required,
                
            },
            password : {
                required,
                min : minLength(6)
            },
            title_label: {
                required
            }
        }
    },
    mounted(){
       
           this.$refs.button.disabled = true
    },
    computed : {
        registrationData(){
           let dateObj = new Date();
           let month = dateObj.getUTCMonth() + 1; //months from 1-12
           let day = dateObj.getUTCDate();
           let year = dateObj.getUTCFullYear();

           let newdate = year + "/" + month + "/" + day;
           return newdate
        }
    },
    methods : {
        getUsers(event){
            event.preventDefault();
            let usersProfile = localStorage.getItem("users")
            let users;
            if(usersProfile == undefined ){
                users = []
            }else{
               users = JSON.parse(usersProfile)
            }
            // localStorage.setItem("users",JSON.stringify(this.users))
            localStorage.setItem("time",this.registrationData)

            users.push(this.users)

            let definedData = localStorage.setItem("users",JSON.stringify(users))
           

            this.$router.push({path : "/success"})                
           // this.$http.post("https://vue-dashboard-17df4.firebaseio.com/users.json", this.users)
            // .then(response => {
            //     this.$router.push({path : "/success"})
            // },
            // error => {
            //     console.log(error)
            // });
        },
        yes(){
            if(this.users.title_label == "" || this.users.first_name == "" || this.users.last_name == "" || this.users.gender == "" || this.users.email ==""||
            this.users.password == ""
            ){
                this.$refs.button.disabled = true
            }else{
                 this.$refs.button.disabled = false
            }
        }
      }
 }


</script>
<style scoped>
.error{
   border : 1px solid red;
}
</style>
