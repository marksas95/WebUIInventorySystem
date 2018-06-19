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
  import Header from '../../components/products/Header.vue'
  import ProductTable from '../../components/BaseTable.vue'
  import ProductDetails from '../../components/BaseDetails'

  export default {
    data() {
      return {
        tableHeaders: ['Category', 'Item Code', 'Description', 'Unit of Measurement', 'Serial Number', 'Status'],
        individualDetails:false,
        productIdToPass:0,
        productDetails:{}
      }
    },
    computed: {
      activeProducts() {
        return this.$store.getters.getActiveProducts;
      },
      products() {
        return this.$store.state.product.products.map(p => {
            return {
              id:p.id,
              data:[p.category == null ? '':p.category.name,p.itemCode,p.description,p.unitOfMeasurement,p.serialNumber,p.active]
            }
        });
      },
      detailsTitle(){
        return 'Product Details'
      }

    },
    created: function () {
      this.axios.get('/api/product/list').then((response) => {
        this.$store.dispatch('setProducts', response.data);
      })
    },
    methods: {
      onClick(){
        this.individualDetails = !this.individualDetails;
        console.log(this.individualDetails)
      },
      editProduct(productID) {
        console.log('edit')
        console.log(productID)
        //
      },
      getProduct(productId) {
        console.log(productId)
        this.axios.get('/api/product/findById?id=' + productId).then((response) => {
          let p = response.data
          this.productDetails = {
            'Category': p.category == null ? '':p.category.name,
            'Item Code': p.itemCode,
            'Description' : p.description,
            'Unit Of Measurement' : p.unitOfMeasurement,
            'Serial Number' : p.serialNumber,
            'Status' : p.active == true ? 'Active':'Not Active'
          }
          console.log(this.productDetails)
        })
      },
      deleteProduct(product) {
        console.log('delete')
        console.log(product)
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
