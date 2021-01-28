<template>
    <div id="Permission">
      <div class="allmain">
            <div class="title-main">Permissions List</div>
            <div class="twomain">
                <div class="table-responsive">
                    <div class="table-wrapper">
                        <div class="loader" v-if="loading">
                            <span class="helper"></span>
                            <img class="loaderImg" src="@/assets/ajax-loader.gif">
                        </div>
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-2">
                                   <button class="btn btn-primary" id="btn_created" type="submit">Add New Permissions</button>
                                </div>
                                <div class="col-sm-7">
                                </div>
                                <div class="col-sm-3">
                                <input type="text" v-model="search" class="form-control" id="telefoon" style="font-size: 15px;" placeholder="Search...">
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                <th sty v-for="colum in headers" v-bind:key="colum.id">
                                    {{colum.text}}
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in filteredItems " v-bind:key="index">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.display_name_en }}</td>
                                     <td>{{ item.display_name_kh }}</td>
                                    <td>{{ item.created_at }}</td>
                                    <td>
                                        <a href="javascript:void(0)"><span style="font-size: 1.2em; color: green;"><i class="fa fa-eye fa-fw" aria-hidden="true"></i></span></a>
                                        <a href="javascript:void(0)"><span style="font-size: 1.2em; color: Dodgerblue;"><i class="fa fa-edit fa-fw" aria-hidden="true"></i></span></a>
                                        <a href="javascript:void(0)"><span style="font-size: 1.2em; color: red;"><i class="fa fa-minus-circle fa-fw" aria-hidden="true"></i></span></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       <div class="card-footer pb-0 pt-3">
                            <jw-pagination :items="items" @changePage="onChangePage"></jw-pagination>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'


export default {
    data(){
        return{
            search:'',
            loading: false,
             headers: [
                { text: 'No', value: 'id' },
                { text: 'Permission', value: 'name' },
                { text: 'PermissionNameEn', value: 'display_name_en' },
                { text: 'PermissionNameKh', value: 'display_name_kh' },
                { text: 'Create Date', value: 'created_at'},
                { text: 'Action', value: 'action', sortable: false }
            ],
            items: [],
        }
    },
    created : function(){
        this.getPermission()
    },
    methods : {
        getPermission(){
             this.loading = true;
            axios.get('permission').then(response =>{
                console.log(response.data.data.data)
                this.items = response.data.data.data;
                 this.loading = false;
            }).catch((err)=>{
                console.log(err)
            })
        },
        
    },
    computed: {
        filteredItems() {
        var self = this;
        return this.items.filter(item => {
            return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 
                || item.display_name_en.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
                
        }) 
        }
    }
}
</script>