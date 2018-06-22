<template>
  <div>
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Product Details</h4>
          </div>
          <div class="panel-body">
            <p>Category: {{product.category == null ? '':product.category.name}}</p>
            <p>Item Code: {{product.itemCode}}</p>
            <p style="white-space: pre">Description: {{product.description}}</p>
            <p>Unit of Measurement: {{product.unitOfMeasurement}}</p>
            <p>Serial Number: {{product.serialNumber}}</p>
            <p>Minimum Stocks: {{product.minimumStocks}}</p>
            <p>Vatable: {{product.vatable}}</p>
            <p>Remarks: {{product.remarks}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../pages/products/Header.vue'


  export default {
    data() {
      return {
        product: []
      }
    },
    created(){
      let productId = this.$store.state.product.productId
      console.log(productId)
      this.axios.get('/api/product/findById?id='+productId).then((response) => {
        this.product = response.data
      })
    },
    components: {
      appHeader: Header
    }


  }
</script>

<style scoped>

</style>
