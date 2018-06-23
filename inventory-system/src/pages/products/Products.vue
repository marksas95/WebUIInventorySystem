<template>
  <div class="border">
    <appHeader></appHeader>
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
        categoryId: 0,
        searchBy: ['All', 'Item Code', 'Description', 'Unit of measurements']
      }
    },
    computed: {
      ...mapGetters([
        'GET_PRODUCT',
        'GET_ACTIVE_PRODUCT',
        'GET_INACTIVE_PRODUCT',
        'GET_PRODUCT_DETAILS'
      ]),
      products() {
        return this.$store.getters.GET_FILTERED_PRODUCTS_TO_VIEW
      }

    },
    methods: {
      ...mapActions({
        INIT_PRODUCTS: 'INIT_PRODUCTS',
        DELETE_PRODUCT: 'DELETE_PRODUCT',
        INIT_CATEGORY: 'INIT_CATEGORY'
      }),
      onClick() {
        this.individualDetails = !this.individualDetails;
        console.log(this.individualDetails)
        console.log(this.productsToView)
      },
      editProduct(productID) {
        console.log('edit')
        console.log(productID)
        this.$router.push({path: `/products/${productID}`})
        this.$destroy()
      },
      getProduct(productId) {
        this.productDetails = this.GET_PRODUCT_DETAILS(productId)
      },
      deleteProduct(productId) {
        if (confirm('Are you sure you want to delete?')) {
          this.DELETE_PRODUCT(productId).then(o => console.log(o))
        }
      }
    },
    created: function () {
      if (this.$store.state.product.products.length === 0 || this.$store.state.category.categories === 0) {
        // this.INIT_CATEGORY
        this.$store.dispatch('INIT_PRODUCTS')
      }
      this.$store.dispatch('INIT_CATEGORY').then(() => {
        this.categoriesToSelect = this.$store.state.category.categories;
      })
    },
    components: {
      appHeader: Header,
      productTable: ProductTable,
      productDetails: ProductDetails
    }
  }
</script>

<style scoped>
  div .border {
    margin-top: 25px;
  }
</style>
