<template>
  <div class="border">
    <appHeader></appHeader>
    <div>
      <productTable v-show="!individualDetails"
                    :table-headers="tableHeaders"
                    :table-data="products"
                    :on-click="onClick"
                    :kinds-of-button="kindsOfButton"
                    :button-function="buttonFunction"/>

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
        searchBy: ['All', 'Item Code', 'Description', 'Unit of measurements'],
        kindsOfButton:['Change Status','Details','Edit']
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
      onClick(button) {
        if(button === 'Details')
        this.individualDetails = !this.individualDetails;
        console.log(this.individualDetails)
        console.log(this.productsToView)
      },
      buttonFunction(productId,button){
        switch (button){
          case 'Details':
            this.productDetails = this.GET_PRODUCT_DETAILS(productId)
                break
          case 'Edit':
            debugger
            this.$router.push({path: `/products/${productId}`})
            this.$destroy()
                break
          case 'Change Status':
              this.$store.dispatch('UPDATE_PRODUCT_STATUS',productId)
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
