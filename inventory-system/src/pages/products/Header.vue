<template>
  <div class="panel panel-default header">
    <ul class="class nav nav-pills">
      <button class="btn btn-primary" @click="onNew">Add Product</button>
      <div class="form-group col-md-2">
        <label for="status" class="text-center col-md-offset-4" color="white">Status</label>
        <select class="form-control"
                id="status"
                v-model="selection"
                :onchange="onFilter">
          <option v-for="o in productsToView"
                  :value="o">
            {{o}}
          </option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="statuss" class="text-center col-md-offset-4" color="white">Category</label>
        <select class="form-control"
                id="statuss"
                v-model="categoryId"
                :onchange="onFilter">
          <option :value="0">All</option>
          <option v-for="category in categoriesToSelect"
                  :value="category.id">
            {{category.name}}
          </option>
        </select>
      </div>
      <form class="navbar-form navbar-right">
        <input type="text" class="form-control" placeholder="Search Product" v-model="searchKeyword">
        <button type="button" class="btn btn-default" @click="onSearch(searchKeyword,selectedSearch)">Search</button>
      </form>
      <div class="col-md-2 navbar-form navbar-right">
        <label for="statusss" class="text-center col-md-offset" color="white">Search By</label>
        <select class="form-control" id="statusss" v-model="selectedSearch">
          <option :value="o" v-for="o in searchBy">{{o}}</option>
        </select>
      </div>
    </ul>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    props: {
    },
    computed: {
      onFilter() {
        this.$store.getters.FILTER_PRODUCTS(this.selection, this.categoryId)
      }
    },
    methods: {
      ...mapActions([
        'SEARCH_FILTERED_PRODUCTS',
        'UPDATE_PRODUCT'
      ]),
      onNew() {
        this.$router.push({path: '/products/new'})
      },
      onSearch(keyword,searchBy){
        console.log(keyword)
        console.log(searchBy)
          this.SEARCH_FILTERED_PRODUCTS({keyword,searchBy})
      }
    },
    data() {
      return {
        selection: 'All',
        categoriesToSelect: {},
        categoryId: 0,
        selectedCategoryId: 0,
        productsToView: ['All', 'Active Only', 'Inactive Only'],
        searchBy: ['All', 'Item Code', 'Description', 'Unit of measurement'],
        selectedSearch:'All',
        searchKeyword:''
      }
    },
    created() {
      this.$store.dispatch('INIT_CATEGORIES').then(() => {
        this.categoriesToSelect = this.$store.state.category.categories;
      })
    }
  }
</script>

<style scoped>
  div .header {
    background-color: snow;
  }
</style>
