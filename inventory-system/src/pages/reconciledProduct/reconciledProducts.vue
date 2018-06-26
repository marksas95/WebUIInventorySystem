<template>
  <div class="border">
    <div>
      <productTable v-show="!individualDetails"
                    :table-headers="tableHeaders"
                    :table-data="reconciledProducts"
                    :on-click="onClick"
                    :kinds-of-button="kindsOfButton"
                    :button-function="buttonFunction"/>

    </div>
  </div>
</template>

<script>
  import ProductTable from '../../components/BaseTable.vue'
  import ProductDetails from '../../components/BaseDetails'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        tableHeaders: ['Date', 'Item Code', 'Warehouse', 'Remarks', 'Physical Count', 'SystemCount'],
        individualDetails: false,
        productIdToPass: 0,
        productDetails: {},

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
      reconciledProducts() {
        return this.$store.state.reconciledProduct.reconciledProducts
      }

    },
    methods: {
      ...mapActions({
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
        this.$store.dispatch('INIT_RECONCILED_PRODUCTS')
    },
    components: {

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
