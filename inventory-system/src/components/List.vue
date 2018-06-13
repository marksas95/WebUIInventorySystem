<template>
  <div>
    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Item Code</th>
        <th>Description</th>
        <th>Unit of Measurement</th>
        <th>Serial Number</th>
        <th>Active</th>
        <th>Remarks</th>
        <th>Minimum Stocks</th>
        <th>Vatable</th>
      </tr>
      <tr v-for="product in products" >
        <th>{{product.name}}</th>
        <th>{{product.itemCode}}</th>
        <th>{{product.description}}</th>
        <th>{{product.unitOfMeasurement}}</th>
        <th>{{product.serialNumber}}</th>
        <th>{{product.isActive}}</th>
        <th>{{product.remarks}}</th>
        <th>{{product.minimumStocks}}</th>
        <th>{{product.isVatable}}</th>
        <th><button
          class="btn btn-primary"
          @click.prevent="editProduct(product)">Edit</button></th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: []
      }
    }
  }
</script>

<style scoped>

</style>
