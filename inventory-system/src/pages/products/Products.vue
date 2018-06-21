<template>
  <div>
    <appHeader></appHeader>
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
</template>

<script>
  import Header from '../../components/Header.vue'
  import ProductTable from '../../components/BaseTable.vue'
  import ProductDetails from '../../components/BaseDetails'
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        tableHeaders: ['Category', 'Item Code', 'Description', 'Unit of Measurement', 'Serial Number', 'Status'],
        individualDetails: false,
        productIdToPass: 0,
        productDetails: {}
      }
    },
    computed: {
      ...mapGetters([
        'GET_PRODUCT'
      ]),
      activeProducts() {
        return this.$store.getters.getActiveProducts;
      },
      products() {
        return this.$store.state.product.products.map(p => {
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
      },
      detailsTitle() {
        return 'Product Details'
      }

    },
    methods: {
      ...mapActions([
        'INIT_PRODUCTS',
        'DELETE_PRODUCT'
      ]),
      onClick() {
        this.individualDetails = !this.individualDetails;
        console.log(this.individualDetails)
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
      }
    },
    created: function () {
      if (this.$store.state.product.products.length === 0) {
        console.log('create')
        this.$store.dispatch('INIT_PRODUCTS')
        // this.INIT_PRODUCTS
      } else {
        console.log('wala nag create')
      }
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
