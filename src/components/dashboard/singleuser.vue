<template>
    <div class="container-fluid">
                <section class="section-padding profile">
                    <div class="container">
                        <div class="row mb-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="../dashboard/dashboard.php">Dashboard</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-sm-12 pb-5">
                                <div class="profile-container d-flex justify-content-center align-items-center flex-column">
                                    <div class="user-image mb-2">
                                        <img src="../../../public/images/abiodun.jpg" alt="">
                                    </div>
                                    <div class="user-details d-flex align-items-center justify-content-center flex-column">
                                        <span class="user-name">{{profile.first_name}} {{profile.last_name}}</span>
                                        <div class="user-position">Partner</div>

                                        
                                    </div>
                                </div>
                                
                                <div class="profileContent">

                                        <nav class="list-group list-group-flush">

                                        <div class="list-group-item list-group-item-action">

                                        <div>

                                        <i class="fa fa-envelope mr-3"></i>
                                        <br>
                                        <div class="d-inline-block fw-400" style="font-size : 10px;word-break : break-all">{{profile.email}}</div>

                                        </div>

                                        </div>

                                        <div class="list-group-item list-group-item-action">

                                        <div>

                                        <i class="fa fa-phone mr-3"></i>
                                        <br>
                                        <div class="d-inline-block fw-400" style="font-size : 10px">{{profile.phone_no}}</div>

                                        </div>

                                        </div>

                                        </nav>
                                    </div>
                            </div>

                            <div class="col-lg-8 col-sm-12">
                                <div class="table-responsive bg-white">
                                    <table class="table table-hover mb-0">
                                       
                                        <tbody id="items">
                                            <tr>
                                                <td class="font-weight-bold">Title</td>
                                                <td>{{profile.title_label}}</td>
                                            </tr>
                                            <tr>
                                                <td class="font-weight-bold">First Name</td>
                                                <td>{{profile.first_name}}</td>
                                            </tr>
                                            <tr>
                                                <td class="font-weight-bold">Last Name</td>
                                                <td>{{profile.last_name}}</td>
                                            </tr>
                                            <tr>
                                                <td class="font-weight-bold">Account Created</td>
                                                <td>{{date}}</td>
                                            </tr>
                                            <tr>
                                                <td class="font-weight-bold">Active</td>
                                                <td>Online</td>
                                            </tr>
                                            <tr>
                                                <td class="font-weight-bold">Gender</td>
                                                <td>{{profile.gender}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
</template>
<script>
export default {
    data(){
        return{
            profile : {},
            date : ""
        }
    },
    mounted(){
        let id  = this.$route.params.id;
        let parsedData = JSON.parse(localStorage.getItem("users"))
       console.log(id)
       
        this.profile = parsedData[`${id}`]
        this.date = localStorage.getItem("date")

        
        
        //    if(response.body.data.gender == "0"){
        //        response.body.data.gender = "Male"
        //    }else{
        //        response.body.data.gender = "Female"
        //    }
        //    if(response.body.data.is_login == "0"){
        //        response.body.data.is_login =  "Active"
        //    }else{
        //        response.body.data.is_login = "Not Active"
        //    }

       
    }
    
}
</script>