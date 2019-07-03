<template>
    <nav class="navbar navbar-6 navbar-expand-lg navbar-light">
    <span class="text-danger" id="menu-toggle"><i class="fa fa-bars fa-2x"></i></span>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="badge bg-danger">9</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right slideIn animate" aria-labelledby="navbarDropdown">
                    <span id="title">You have 3 new notifications</span>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="far fa-dot-circle pr-3"></i>You got an email notification</a>
                    <a class="dropdown-item" href="#"><i class="far fa-dot-circle pr-3"></i>New file received</a>
                    <a class="dropdown-item" href="#"><i class="far fa-dot-circle pr-3"></i>Meeting in 30 mins</a>
                    <div class="dropdown-divider"></div>
                    <a class="text-danger" href="#">View all notifications</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-envelope"></i><span class="badge bg-danger">9</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right slideIn animate" aria-labelledby="navbarDropdown">
                    <span id="title">You have 3 new messages</span>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="far fa-dot-circle pr-3"></i>You got an email notification</a>
                    <a class="dropdown-item" href="#"><i class="far fa-dot-circle pr-3"></i>New file received</a>
                    <a class="dropdown-item" href="#"><i class="far fa-dot-circle pr-3"></i>Meeting in 30 mins</a>
                    <div class="dropdown-divider"></div>
                    <a class="text-danger" href="#">View all notifications</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="../../../public/images/Uwa-Ohiku-Jackson-Etti-and-Edu.jpg" alt="" class="image-fluid">
                </a>
                <div class="dropdown-menu dropdown-menu-right slideIn animate" data-toggle="tooltip" data-placement="bottom" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#"><span><i class="fas fa-user pr-3"></i>Profile</span></a>
                    <a class="dropdown-item" href="#"><span><i class="fas fa-cog pr-3"></i>Settings</span></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><span><i class="fas fa-sign-out-alt pr-3"></i>Signout</span></a>
                </div>
            </li>
        </ul>
    </div>
</nav>
</template>
<script>
export default {
    
}
</script>