<template>
    <div id="Permission">
      <div class="allmain">
            <div class="title-main">Permissions Infor</div>
            <div class="twomain">
                <div class="table-responsive">
                    <div class="table-wrapper">
                        <div class="loader" v-if="loading">
                            <span class="helper"></span>
                            <img class="loaderImg" src="@/assets/ajax-loader.gif">
                        </div>
                        <form>
                            <div class="row">
                                <div class="col">
                                    <label class="label">Permissions name</label>
                                    <input type="text" id="name" class="form-controls" autocomplete="off" placeholder="Permission name">
                                </div>
                                <div class="col">
                                    <label  class="label">Permissions group</label>
                                    <select class="form-controls form-control-lg">
                                        <option>Large select</option>
                                        <option>Large select</option>
                                        <option>Large select</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label class="label">Permission nameEn</label>
                                    <input type="text" class="form-controls" placeholder="Permission nameEn">
                                </div>
                                <div class="col">
                                    <label  class="label">Permission nameKh</label>
                                    <input type="text" class="form-controls" placeholder="Permission nameKh">
                                </div>
                            </div>
                        </form>
                     
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>