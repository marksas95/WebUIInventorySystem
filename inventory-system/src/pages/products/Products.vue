<template>
  <div>
    <appHeader></appHeader>
    <productTable
      :table-headers="tableHeaders"
      :table-data="products"
      :on-edit="editProduct"
      :on-delete="deleteProduct"/>
  </div>
</template>

<script>
  import Header from '../../components/products/Header.vue'
  import ProductTable from '../../components/BaseTable.vue'

  export default {
    data() {
      return {
        tableHeaders: ['Category', 'Item Code', 'Description', 'Unit of Measurement', 'Serial Number', 'Status'],

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
      }
    },
    created: function () {
      this.axios.get('/api/product/list').then((response) => {
        // console.log(response.data);
        // this.$store.state.product.products=response.data;
        // console.log(this.$store.state.product.products);
        // this.$store.actions.setProducts('setProducts',response.data);
        this.$store.dispatch('setProducts', response.data);
      })
    },
    methods: {
      editProduct(productID) {
        console.log('edit')
        console.log(productID)
        //
      },
      getProduct(productId) {
        this.$store.dispatch('setProductId', productId)
      },
      deleteProduct(product) {
        console.log('delete')
        console.log(product)
      }

    },
    components: {
      appHeader: Header,
      productTable: ProductTable
    }
  }
</script>

<style scoped>

</style>
