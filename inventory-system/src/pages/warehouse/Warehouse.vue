<template>
  <warehouseTable
    :table-headers="tableHeaders"
    :table-data="warehouses"
    :on-edit="editWarehouse"
    :on-delete="deleteWarehouse"
  />
</template>

<script>
  import WarehouseTable from '../../components/BaseTable'
  import warehouse from "../../store/modules/warehouse.js";

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
      warehouses() {
        return this.$store.state.warehouse.warehouses.map(o => {
            return {
              id: o.id,
              data: [o.name, o.address, o.description]
            }
          }
        )
      }
    },
    created() {
      this.axios.get('/api/warehouse/list').then(response => {
        this.$store.dispatch('setWarehouses', response.data)
      })
    },
    methods: {
      editWarehouse(warehouseId) {
        console.log('edit')
        console.log(warehouseId)
        this.$router.push({path: `/warehouses/${warehhouseId}`})
      },
      deleteWarehouse(warehouseId) {
        console.log('delete')
        console.log(warehouseId)
      }
    }
  }
</script>

<style scoped>

</style>
