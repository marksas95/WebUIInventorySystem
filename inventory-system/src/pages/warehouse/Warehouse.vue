<template>
  <warehouseTable
    :table-headers="tableHeaders"
    :table-data = "warehouses"
  />
</template>

<script>
  import WarehouseTable from '../../components/BaseTable'

  export default {
    name: "Warehouse",
    data() {
      return {
        tableHeaders: ['Name', 'Location', 'Decription']
      }
    },
    components: {
      warehouseTable: WarehouseTable
    },
    computed: {
      warehouses(){
        return this.$store.state.warehouse.warehouses.map(o => {
            return [o.name, o.address, o.description]
          }
        )
      }
    },
    created() {
      this.axios.get('/api/warehouse/list').then(response => {
        console.log(response.data)
        this.$store.dispatch('setWarehouses', response.data)
      })
    }
  }
</script>

<style scoped>

</style>
