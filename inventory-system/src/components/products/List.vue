<template>
  <div>
    <appHeader></appHeader>

    <table  class="table">
      <thead>
      <tr>
        <th>Category</th>
        <th>Name</th>
        <th>Item Code</th>
        <th>Description</th>
        <th>Unit of Measurement</th>
        <th>Serial Number</th>
        <th>Status</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" >
        <th>{{product.category}}</th>
        <th>{{product.name}}</th>
        <th>{{product.itemCode}}</th>
        <th>{{product.description}}</th>
        <th>{{product.unitOfMeasurement}}</th>
        <th>{{product.serialNumber}}</th>
        <th v-if="product.isActive">Active</th>
        <th v-else="!product.isActive">Not active</th>
        <th><button
          class="btn btn-primary"
          @click="editProduct(product)">Edit</button></th>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import Header from './Header.vue'
  export default {
    data() {
      return {
        productsList: []
      }
    },
    computed:{
      products(){
        return this.$store.state.product.products;
      }
    },
    created: function () {
      this.axios.get('/api/product/list').then((response) => {
         // console.log(response.data);
        this.$store.state.product.mutations.setProducts(response.data);
        productsList =  this.$store.state.product.getters.getProducts();
        console.log(productsList);
      })
    },
    methods:{
      editProduct(product){
        console.log(product.name)
      }
    },
    components:{
      appHeader: Header
    }
  }
</script>

<style scoped>

</style>
