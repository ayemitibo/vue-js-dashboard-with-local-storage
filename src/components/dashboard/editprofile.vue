<template>
   <div class="cotainer-fluid" id="editProfile">
                <section class="section-padding">
                    <div class="container">
                        <div class="row mb-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="../dashboard/dashboard.php">Dashboard</a></li>
                                    <li class="breadcrumb-item"><a href="./profile.php">Profile</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Edit profile</li>
                                </ol>
                            </nav>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 pb-5">
                                <!-- Profiile sidebar -->
                                <div class="user pb-3">
                                    <div class="user-profile pt-3 d-flex justify-content-center align-items-center flex-column">
                                        <div class="user-image pt-4">
                                            <img src="../../../public/images/abiodun.jpg" alt="">
                                        </div>
                                        <div class="user-details d-flex align-items-center flex-column py-4">
                                            <h5 class="user-name text-lg">{{users.first_name}} {{users.last_name}}</h5>
                                            <span class="user-position">Partner</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center flex-column upload">
                                        <input type="file" class="form-control border-0 justify-content-center pb-2">
                                        <p>Upload a different photo.</p>
                                    </div>
                                </div>
                                <div class="wiz">
                                    <nav class="list-group list-group-flush">
                                        <a class="list-group-item active list-group-item-action" href="#"><i class="fa fa-cog"></i>Profile Settings</a>
                                        <a class="list-group-item list-group-item-action" href="#">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div><i class="fa fa-tasks mr-3"></i>
                                                    <div class="d-inline-block font-weight-medium">Projects</div>
                                                </div>
                                                <span class="badge badge-primary">6</span>
                                            </div>
                                        </a>
                                        <a class="list-group-item list-group-item-action" href="#">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div><i class="fa fa-users mr-3"></i>
                                                    <div class="d-inline-block font-weight-medium">Members</div>
                                                </div>
                                                <span class="badge badge-warning text-white">3</span>
                                            </div>
                                        </a>
                                        <a class="list-group-item list-group-item-action" href="#">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div><i class="fa fa-user-circle mr-3"></i>
                                                    <div class="d-inline-block font-weight-medium">clients</div>
                                                </div>
                                                <span class="badge badge-dark">4</span>
                                            </div>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <!-- Profile Settings-->
                            <div class="col-lg-8">
                                <div class="card p-5">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="account-fn">First Name</label>
                                                    <input class="form-control" type="text" id="account-fn"  v-model="users.first_name" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="account-ln">Last Name</label>
                                                    <input class="form-control" type="text" id="account-ln" v-model="users.last_name" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="account-email">E-mail Address</label>
                                                    <input class="form-control" type="email" id="account-email" v-model="users.email">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="account-phone">Phone Number</label>
                                                    <input class="form-control" type="tel" id="account-phone" v-model="users.phone_no" required="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                        <label>Title</label>
                                                        <select class="form-control" v-model="users.title_label">
                                                        <option value = "Mr">Mr</option>
                                                        <option  value = "Mrs">Mrs</option>
                                                        <option  value = "Miss">Miss</option>
                                                        <option  value = "Dr">Dr</option>
                                                        <option  value = "Prof">Prof</option>
                                                        </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="account-pass">Comfirm Password</label>
                                                    <input class="form-control" type="password" id="account-pass">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="Bio">Profile Description</label>
                                                    <textarea class="form-control" id="bio" rows="4"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12 mt-4">
                                                <div class="d-flex flex-wrap justify-content-lg-end align-items-center">
                                                    <button class="btn btn-danger" type="button" style="font-size:12px;" @click="update()">
                                                        Update Profile
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
</template>
<script>
export default {
    data : function(){
        return {
        users : {
            first_name : "",
            last_name : "",
            email : "",
            title_label : ""
        }
        }
    },
    mounted(){
        let id  = JSON.parse(localStorage.getItem("users")).length - 1
        let users = JSON.parse(localStorage.getItem("users"))
        this.users = users[`${id}`]
    },
    methods : {
        update(){
            let id  = JSON.parse(localStorage.getItem("users")).length - 1
             let users = JSON.parse(localStorage.getItem("users"))
             users[`${id}`] = this.users
             localStorage.setItem("users",JSON.stringify(users))
        }
    }
}
</script>

