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
      <tr v-for="product in activeProducts" >
        <th>{{product.category == null ? '':product.category.name}}</th>
        <th>{{product.name}}</th>
        <th>{{product.itemCode}}</th>
        <th>{{product.description}}</th>
        <th>{{product.unitOfMeasurement}}</th>
        <th>{{product.serialNumber}}</th>
        <th v-if="product.active=true">Active</th>
        <th v-else="product.active=false">Not active</th>
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

      }
    },
    computed:{
      activeProducts(){
        return this.$store.getters.getActiveProducts;
      },
      products(){
        return this.$store.state.product.products;
      }
    },
    created: function () {
      this.axios.get('/api/product/list').then((response) => {
         // console.log(response.data);
        // this.$store.state.product.products=response.data;
        // console.log(this.$store.state.product.products);
        // this.$store.actions.setProducts('setProducts',response.data);
          this.$store.dispatch('setProducts',response.data);
      })
    },
    methods:{
      editProduct(product){
        console.log(product)
        let category = this.$store.getters.getCategory(product.id)
        console.log(category)
      }
    },
    components:{
      appHeader: Header
    }
  }
</script>

<style scoped>

</style>
