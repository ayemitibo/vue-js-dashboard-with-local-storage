
import login from "./components/signup/login.vue"
import signUp from './components/signup/signup.vue'
import Template from './components/dashboard/Template.vue'
import dashboard from './components/dashboard/dashboard.vue'
import listusers from './components/dashboard/listusers.vue'
import profile from './components/dashboard/profile.vue'
import editprofile from './components/dashboard/editprofile.vue'
import singleuser from './components/dashboard/singleuser.vue'
import success from "./components/signup/success.vue"

export const routes = [{
    path : '/login',
    component : login
},
{
    path : "/success",
    component : success
},
{
    path : '/',
    component : signUp
},{
    path : '/account', 
    component : Template,
    // redirect: "/template/dashboard",
    children : [
        { path : 'dashboard',component : dashboard},
        {  path : 'users', component : listusers},
        {  path : 'profile', component : profile},
        { path : 'users/:id', component : singleuser},
        { path : 'edit-profile', component : editprofile},
        ]
},
// {path : "*" , redirect : "/"},
]