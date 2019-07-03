<template>
        <div class="sidebar-wrapper">
    <div class="sidebar-heading">
        <img src="../../../public/images/log1.png" alt="" class="img-fluid" style="width : 40px"/>
    </div>
    <div class="d-flex justify-content-center align-items-center flex-column other-contents">
        <img src="../../../public/images/abiodun.jpg" alt="" class="image-fluid" />
    </div>
    <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action active"><i class="fas fa-tachometer-alt pr-3"></i>Dashboard</a>

        <div>
            <a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                <span><i class="fas fa-user pr-3"></i>Profile<i class="fas fa-ellipsis-h"></i></span>
            </a>

            <div class="collapse" id="collapse1">
                <div class="card card-body">
                   <router-link tag="a" to="/account/profile">View profile</router-link> 
                   <router-link tag="a" to="/account/edit-profile">Edit profile</router-link>
                </div>
            </div>
        </div>

        <div>
            <a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                <span><i class="fas fa-users pr-3"></i>Members<i class="fas fa-ellipsis-h"></i></span>
            </a>

            <div class="collapse" id="collapse2">
                <div class="card card-body">
                  <router-link tag="a" to="/account/users"> View all members </router-link>
                </div>
            </div>
        </div>

        <div>
            <a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapse5">
                <span><i class="fas fa-id-card pr-3"></i>Contact Report<i class="fas fa-ellipsis-h float-right"></i></span>
            </a>

            <div class="collapse" id="collapse5">
                <div class="card card-body">
                    <a href="#">Create contact report</a>
                    <a href="#">View all reports</a>
                </div>
            </div>
        </div>
        <div>
            <a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapse7" role="button" aria-expanded="false" aria-controls="collapse7">
                <span><i class="far fa-calendar-alt pr-3"></i>Events<i class="fas fa-ellipsis-h float-right"></i></span>
            </a>

            <div class="collapse" id="collapse7">
                <div class="card card-body">
                    <a href="#">Create event</a>
                    <a href="#">View events</a>
                </div>
            </div>
            <div>
            <a class="list-group-item list-group-item-action" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                <span><i class="fas fa-sign-out-alt pr-3"></i>Sign Out</span>
            </a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
   
}
</script>