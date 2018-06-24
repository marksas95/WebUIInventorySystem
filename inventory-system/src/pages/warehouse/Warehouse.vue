<template>
  <div>
    <appHeader></appHeader>
    <warehouseTable
      v-show="!individualDetails"
      :table-headers="tableHeaders"
      :table-data="warehouses"
      :on-edit="editWarehouse"
      :on-delete="deleteWarehouse"
      :on-details="getWarehouse"
      :on-click="onClick"
    />

    <warehouse-details
      v-show="individualDetails"
      :details-title="detailsTitle"
      :objectDetails="warehouseDetailss"
      :on-click="onClick"
    />
  </div>
</template>

<script>
  import WarehouseTable from '../../components/BaseTable'
  import WarehouseDetails from '../../components/BaseDetails'
  import Header from './Header'
  import {mapGetters} from 'vuex'
  export default {
    name: "Warehouse",
    data() {
      return {
        tableHeaders: ['Name', 'Location', 'Decription','Status'],
        individualDetails:false,
        detailsTitle:'Warehouse Details',
        warehouseDetailss:{}
      }
    },
    components: {
      warehouseTable: WarehouseTable,
      warehouseDetails: WarehouseDetails,
      appHeader: Header
    },
    computed: {
      ...mapGetters([
        'GET_FILTERED_WAREHOUSES_TO_VIEW'
      ]),
      warehouses() {
        debugger
        return this.$store.getters.GET_FILTERED_WAREHOUSES_TO_VIEW
      }
    },
    created() {
      this.axios.get('/api/warehouse/list').then(response => {
        this.$store.dispatch('setWarehouses', response.data)
        console.log(response.data)
      })
    },
    methods: {
      onClick(){
        this.individualDetails = !this.individualDetails
      },

      editWarehouse(warehouseId) {
        console.log('edit')
        console.log(warehouseId)
        this.$router.push({path: `/warehouses/${warehouseId}`})
      },
      getWarehouse(warehouseId) {
        console.log(warehouseId)
        this.axios.get('/api/warehouse/findById?id=' + warehouseId).then((response) => {
          console.log(response.data)
          let p = response.data

          console.log(p)
          this.warehouseDetailss = {
            'Name' : p.name,
            'Location' : p.address,
            'Description' : p.description
          }
        })
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
