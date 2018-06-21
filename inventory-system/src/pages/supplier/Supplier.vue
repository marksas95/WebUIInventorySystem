<template>
    <supplierTable
    :table-headers="tableHeaders"
    :table-data="suppliers"
    :onEdit="editSupplier"
    :onDelete="deleteSupplier"
    />
</template>


<script>
import	SupplierTable from "../../components/BaseTable.vue";
import supplier from "../../store/modules/supplier";
import { mapActions } from 'vuex';
export default {
	name: 'Supplier',
	data(){
    return {
      tableHeaders: ['Name']
    }
	},
	methods:{

    ...mapActions([
      'DELETE_SUPPLIERS'
    ]),

    editSupplier(supplierId) {
      console.log('edit')
      console.log(supplierId)
      this.$router.push({ path:`/suppliers/${supplierId}`})
    },
    deleteSupplier(supplierId) {
     
        console.log('delete')
        console.log(supplierId)
        this.DELETE_SUPPLIERS(supplierId)
     
      
    }
	},
	components:{
		supplierTable: SupplierTable
	},
  created() {
	  this.axios.get('/api/supplier/list').then(response => {
	    console.log(response.data)
      this.$store.dispatch('setSuppliers', response.data)
    })
  },
  computed: {
    suppliers() {
      return this.$store.state.supplier.suppliers.map(o => {
          return {
            id: o.id,
            data: [o.name]
          }
        }
      )
    }
  }

}
</script>


<style>

</style>
