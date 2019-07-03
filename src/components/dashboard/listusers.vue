<template>
   <div class="cotainer-fluid content" id="viewClient">
                <section class="section-padding">
                    <div class="container">
                        <div class="row mb-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="../dashboard/dashboard.html">Dashboard</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Requisition report</li>
                                </ol>
                            </nav>
                        </div>

                        <div class="row mb-4">
                            <div class="col-12 d-none d-lg-flex justify-content-lg-end pr-5">
                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role=" document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalCenterTitle">
                                                    Create new report
                                                </h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body" style="height:400px; overflow-y:auto;">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="clientName">Employees Name</label>
                                                        <input type="text" class="form-control" id="newclientName">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="newRequisitionReportDepartment">Department</label>
                                                        <input type="text" class="form-control" id="newRequisitionReportDepartment">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="newclientTel">Title</label>
                                                        <input type="text" class="form-control" id="newclientTel">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="newRequisitionReportReceipt">Date of expense</label>
                                                        <input type="date" class="form-control" id="newRequisitionReportReceipt">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="newrequisitionReprtCost">cost of expense</label>
                                                        <input type="text" class="form-control" id="newrequisitionReprtCost">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="newrequisitionReprtReceipt">upload receipt if any</label>
                                                        <input type="file" class="form-control" id="newrequisitionReprtReceipt">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="newRequisitionReportReceipt">Description of product</label>
                                                        <textarea class="form-control" id="newRequisitionReportReceipt" rows="4"></textarea>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="table-responsive-xl">
                                <table class="mb-0 table table-hover bg-white display">
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list,index) in  listData" :key="list.id">
                                            <td>
                                                <div>
                                                    <span class="sn">{{index + 1 }}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="../members/membersSingle.php" class="client-link">{{list.first_name}}</a>
                                            </td>
                                            <td>
                                                <span>{{list.last_name}}</span>
                                            </td>
                                            <td>
                                               {{list.email}}
                                            </td>
                                            <td>
                                               {{list.phone_no}}
                                            </td>
                                             <td>
                                                <a @click="move(index)" style="cursor : pointer"><i class="fas fa-eye"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    computed : {
        listData(){
            console.log(this.$store.state.listData)
            return this.$store.state.listData;
        }
    },
   mounted(){
       this.$store.commit("fetchData", this)
    },
    methods : {
        move(id){
            // console.log(id)
           this.$router.push({path : `/account/users/${id}`})
        }
    }
    
}
</script>