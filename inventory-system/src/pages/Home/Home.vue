<template>
<div>
  <h1 class="text-center">Stocks</h1>
  <div v-for="warehouse in warehousesData">
    <warehouseStocks
      :warehouseData="warehouse"/>
  </div>

</div>
</template>

<script>
  import warehouseStocks from '../../components/WarehouseStocks'
    export default {
        name: "Home.vue",
      data(){
          return{

          }
      },
      computed: {
        warehousesData() {
          return this.$store.state.warehouse.warehouses.map(o => {
              return {
                'name':o.name,
                'active':o.active === true ? 'Active':'Not Active',
                'goodQuantityProducts':o.goodQuantityProducts.map(o => {
                  return {
                    'itemCode':o.product.itemCode,
                    'quantity':o.quantity,
                    'status':o.product.active === true ? 'Active':'Not Active'
                  }
                })
              }
            }
          )
        }
      },
      created(){
        this.axios.get('/api/warehouse/list').then(response => {
          this.$store.dispatch('setWarehouses', response.data)
        })
        console.log(this.warehouses)
      },
      components:{
          warehouseStocks
      }
    }
</script>

<style scoped>

</style>
