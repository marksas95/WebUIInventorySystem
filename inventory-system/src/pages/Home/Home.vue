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
  import warehouseStocks from './WarehouseStocks'
    export default {
        name: "Home",
      data(){
          return{

          }
      },
      computed: {
        warehousesData() {
          return this.$store.state.warehouse.warehouses.map(o => {
              return {
                'id':o.id,
                'name':o.name,
                'active':o.active === true ? 'Active':'Not Active',
                'goodQuantityProducts':o.goodQuantityProducts.map(o => {
                  return {
                    'itemCode':o.product.itemCode,
                    'minimumStocks':o.product.minimumStocks,
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
