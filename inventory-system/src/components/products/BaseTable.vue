<template>
  <div>
    <table  class="table">
      <thead>
      <tr>
        <template v-for="tableHeader in tableHeaders">
          <th>{{tableHeader}}</th>
        </template>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in tableData">
        <template v-for="d in data">
          <th>{{d}}</th>
        </template>
          <th>
            <button @click="onEdit(data[0])" class="btn btn-primary">Edit</button>
            <button @click="onDelete(data)" class="btn btn-danger">Delete</button>
          </th>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      tableHeaders: {
        type: Array,
        default: []
      },
      tableData: {
        type: Array,
        default: []
      },
      onEdit:{
        type:Function,
        default: () => {}
      },
      onDelete:{
        type:Function,
        default: () => {}
      }
    },
    computed:{
      // activeProducts(){
      //   return this.$store.getters.getActiveProducts;
      // },
      // products(){
      //   return this.$store.state.product.Products;
      // }
    },
    created: function () {
      // this.axios.get('/api/product/list').then((response) => {
      //    // console.log(response.data);
      //   // this.$store.state.product.products=response.data;
      //   // console.log(this.$store.state.product.products);
      //   // this.$store.actions.setProducts('setProducts',response.data);
      //     this.$store.dispatch('setProducts',response.data);
      // })
    },
    methods:{
      // editProduct(product){
      //   let category = this.$store.getters.getCategory(product.id)
      //   console.log(category)
      // },
      // getProduct(productId){
      //   this.$store.dispatch('setProductId',productId)
      // }

    }
  }
</script>

<style scoped>

</style>
