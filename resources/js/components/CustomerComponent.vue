<template>
    <div class="customer">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Customers</div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(customer, index) in customers" :key="customer.id">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ customer.name }}</td>
                                    <td>{{ customer.email }}</td>
                                    <td>{{ customer.phone }}</td>
                                    <td class="text-center">
                                        <button class="btn btn-info btn-sm">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                        <button class="btn btn-success btn-sm">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <pagination v-if="pagination.last_page > 1"
                                       :pagination = "pagination"
                                       :offset="5"
                                       @paginate="getData()"
                            >
                            </pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
    export default {
        data () {
          return {
              customers: [],
              pagination: {
                  current_page : 1,
              },
          }
        },
        mounted() {
            console.log('Component mounted.'),
            this.getData()
        },
        methods:{
            getData(){
                this.$Progress.start()
                axios.get('/api/customer?page='+this.pagination.current_page)
                    .then(response => {
                        this.customers = response.data.data
                        this.pagination = response.data.meta
                        this.$Progress.finish()
                    })
                    .catch(e => {
                        console.log(e)
                        this.$Progress.fail()
                    })
            }
        }
    }
</script>
