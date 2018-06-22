<template>
  <div>
    <div class="panel panel-default header">
      <ul class="class nav nav-pills">
        <!--<router-link to="/" tag="li" active-class="active" exact><a>List</a></router-link>-->
        <!--<router-link to="/create" tag="li" active-class="active" exact><a>Create</a></router-link>-->
        <button class="btn btn-primary " @click="onNew">New</button>
        <div class="form-group col-md-2">
          <label for="status" class="text-center col-md-offset-4" color="white">Status</label>
          <select class="form-control"
                  id="status"
                  v-model="selectViewProduct">
            <option :value="o" v-for="o in productsToView">{{o}}</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="statuss" class="text-center col-md-offset-4" color="white">Category</label>
          <select class="form-control" id="statuss" v-model="categoryId">
            <option :value="0">All</option>
            <option v-for="category in categoriesToSelect"
                    :value="category.id">
              {{category.name}}
            </option>
          </select>
        </div>
        <!--<router-link to="/details" tag="li" active-class="active" exact><a>Details</a></router-link>-->
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Product">
          </div>
          <button type="submit" class="btn btn-default">Search</button>
        </form>
      </ul>
    </div>
    <div>

      <productTable v-show="!individualDetails"
                    :table-headers="tableHeaders"
                    :table-data="products"
                    :on-edit="editProduct"
                    :on-delete="deleteProduct"
                    :on-details="getProduct"
                    :on-click="onClick"/>

      <product-details v-show="individualDetails"
                       :details-title="detailsTitle"
                       :objectDetails="productDetails"
                       :on-click="onClick"/>
    </div>

  </div>
</template>

<script>
  import Header from './Header.vue'
  import ProductTable from '../../components/BaseTable.vue'
  import ProductDetails from '../../components/BaseDetails'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        tableHeaders: ['Category', 'Item Code', 'Description', 'Unit of Measurement', 'Serial Number', 'Status'],
        individualDetails: false,
        productIdToPass: 0,
        productDetails: {},
        detailsTitle: 'Product Details',
        productsToView: ['All', 'Active Only', 'Inactive Only'],
        selectViewProduct: 'All',
        categoriesToSelect: [],
        categoryId: 0
      }
    },
    computed: {
      ...mapGetters([
        'GET_PRODUCT',
        'GET_ACTIVE_PRODUCT',
        'GET_INACTIVE_PRODUCT'
      ]),
      products() {
        let p = {}
        if (this.selectViewProduct === 'Active Only') {
          p = this.GET_ACTIVE_PRODUCT;
          p = this.getProductsByCategory(p, this.categoryId)
        } else if (this.selectViewProduct === 'Inactive Only') {
          p = this.GET_INACTIVE_PRODUCT;
          p = this.getProductsByCategory(p, this.categoryId)
        } else {
          p = this.$store.state.product.products;
          p = this.getProductsByCategory(p, this.categoryId)
        }
        console.log(this.selectViewProduct)

        return p.map(p => {
          return {
            id: p.id,
            data: [
              p.category == null ? '' : p.category.name,
              p.itemCode,
              p.description,
              p.unitOfMeasurement,
              p.serialNumber,
              p.active == true ? 'Active' : 'Not Active']
          }
        });
      }

    },
    methods: {
      ...mapActions([
        'INIT_PRODUCTS',
        'DELETE_PRODUCT',
        'INIT_CATEGORY'
      ]),
      onClick() {
        this.individualDetails = !this.individualDetails;
        console.log(this.individualDetails)
        console.log(this.productsToView)
      },
      editProduct(productID) {
        console.log('edit')
        console.log(productID)
        this.$router.push({path: `/products/${productID}`})
      },
      getProduct(productId) {
        let p = this.GET_PRODUCT(productId)
        this.productDetails = {
          'Category': p.category == null ? '' : p.category.name,
          'Item Code': p.itemCode,
          'Description': p.description,
          'Unit Of Measurement': p.unitOfMeasurement,
          'Serial Number': p.serialNumber,
          'MinimumStocks': p.minimumStocks,
          'Vatable': p.vatable === true ? 'Vatable' : 'Not Vatable',
          'Remarks': p.remarks
        }
      },
      deleteProduct(productId) {
        if (confirm('Are you sure you want to delete?')) {
          this.DELETE_PRODUCT(productId).then(o => console.log(o))
        }
      },
      onNew() {
        this.$router.push({path: '/products/new'})
      },
      getProductsByCategory(products, categoryId) {
      return categoryId==0? products:products.filter((val) => val.category.id == categoryId);

      }
    },
    created: function () {

      if (this.$store.state.product.products.length === 0|this.$store.state.category.categories ===0) {
        console.log('create')
        // this.INIT_CATEGORY
        this.$store.dispatch('INIT_CATEGORY')
        this.$store.dispatch('INIT_PRODUCTS')
        // this.INIT_PRODUCTS
      } else {
        console.log('wala nag create')
      }
      this.categoriesToSelect = this.$store.state.category.categories;
      console.log(this.categoriesToSelect)
      console.log(this.productsToView)
    },
    components: {
      appHeader: Header,
      productTable: ProductTable,
      productDetails: ProductDetails
    }
  }
</script>

<style scoped>
</style>
