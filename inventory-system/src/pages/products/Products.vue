<template>
  <div>
    <appHeader></appHeader>

    <!--<table  class="table">-->
    <!--<thead>-->
    <!--<tr>-->
    <!--<th>Category</th>-->
    <!--<th>Item Code</th>-->
    <!--<th>Description</th>-->
    <!--<th>Unit of Measurement</th>-->
    <!--<th>Serial Number</th>-->
    <!--<th>Status</th>-->
    <!--<th></th>-->
    <!--</tr>-->
    <!--</thead>-->
    <!--<tbody>-->
    <!--<tr v-for="product in products">-->
    <!--<th>{{product.category == null ? '':product.category.name}}</th>-->
    <!--<th>{{product.itemCode}}</th>-->
    <!--<th>{{product.description}}</th>-->
    <!--<th>{{product.unitOfMeasurement}}</th>-->
    <!--<th>{{product.serialNumber}}</th>-->
    <!--<th v-if="product.active">Active</th>-->
    <!--<th v-else="!product.active">Not active</th>-->
    <!--<th><button-->
    <!--class="btn btn-primary"-->
    <!--@click="getProduct(product.id)">-->
    <!--<router-link-->
    <!--to="/details"-->
    <!--tag="li"-->
    <!--active-class="active"-->
    <!--exact>Details</router-link>-->
    <!--</button></th>-->
    <!--<th><button-->
    <!--class="btn btn-primary"-->
    <!--@click="editProduct(product)">Edit</button></th>-->
    <!--</tr>-->


    <!--</tbody>-->

    <!--</table>-->
    <productTable
      :table-headers="tableHeaders"
      :table-data="products"
      :on-edit="editProduct"
      :on-delete="deleteProduct"/>
  </div>
</template>

<script>
  import Header from '../../components/products/Header.vue'
  import ProductTable from '../../components/products/BaseTable.vue'

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
            return [p.category == null ? '':p.category.name,p.itemCode,p.description,p.unitOfMeasurement,p.serialNumber,p.active]
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
