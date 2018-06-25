<template>
  <div>
    <appHeader></appHeader>
    <warehouseTable
      v-show="!individualDetails"
      :table-headers="tableHeaders"
      :table-data="warehouses"
      :on-click="onClick"
      :button-function="buttonFunction"
      :kinds-of-button="kindsOfButton"
    />

    <warehouse-details
      v-show="individualDetails"
      :details-title="detailsTitle"
      :objectDetails="warehouseDetails"
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
        tableHeaders: ['Name', 'Location', 'Decription', 'Status'],
        individualDetails: false,
        detailsTitle: 'Warehouse Details',
        warehouseDetails: {},
        kindsOfButton: ['Change Status', 'Details', 'Edit']
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
      onClick(button) {
        if (button === 'Details') {
          this.individualDetails = !this.individualDetails
        }
      },
      buttonFunction(warehouseId, button) {
        switch (button) {
          case 'Edit':
            console.log('edit')
            this.$router.push({path: `/warehouses/${warehouseId}`})
            this.$destroy
            break
          case 'Details':
            console.log('details')
            this.warehouseDetails = this.$store.getters.GET_WAREHOUSE(warehouseId)
            console.log(this.warehouseDetails)
            break
          case 'Change Status':
            this.$store.dispatch('SET_STATUS_OF_WAREHOUSE',warehouseId)
            console.log('change status')
            break

        }
      }
    }
  }
</script>

<style scoped>

</style>
