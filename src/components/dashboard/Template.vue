<template>
        <div class="d-flex" id="wrapper">
            <sidebar></sidebar>
            <div class="page-content-wrapper">
            <topbar></topbar>
            <router-view></router-view>
          </div>
        </div>
</template>

<script>
import topbar from  "./topbar.vue"
import sidebar from  "./sidebar.vue" 
export default {
    components : {
        sidebar,
        topbar
    }
}
</script>