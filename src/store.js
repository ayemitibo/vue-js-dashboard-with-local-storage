
import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

export default  new Vuex.Store({
    state : {
        listData : [],
        idToken : null,
        notAuthorised : false
    },
    mutations : {
      authUsers(state,data){
            state.idToken = data.token
        },
        fetchData : function(state,payload){
            // payload.$http.get("http://192.168.15.122:3030/users")
            let Data = null
            let data = JSON.parse(localStorage.getItem("users"))
            
            Data = data
          state.listData = Data
        },
    },
    actions : {
        login({state},payload){
        //     payload.$http.post("http://192.168.15.122:3030/login",payload.loggedUsers)
        //     .then(response => {
        //         commit("authUsers",{
        //             token : response.body.result.token
        //         })
        //  localStorage.setItem("id",state.idToken)
        
          // setTimeout(() => {
          //   payload.$router.push({path : "/account/dashboard"})
          // },3000);
            // },error => {
            //   payload.successMessage = "Email and Password do not match"
            //   payload.$refs.success.style.display = "block";
            //   payload.$refs.success.classList = "red";
            // });
            if(payload.usersRegisterData.email !== payload.loggedUsers.email && payload.usersRegisterData.password !== payload.loggedUsers.password){
                payload.successMessage = "Email and Password do not match"
                  payload.$refs.success.style.display = "block";
                  payload.$refs.success.classList = "red";
            }else{
                payload.$router.push({path : "/account/dashboard"})
            }
        }
    },
})