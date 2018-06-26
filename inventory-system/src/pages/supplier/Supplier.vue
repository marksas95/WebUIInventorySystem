<template>
    <supplierTable
    :table-headers="tableHeaders"
    :table-data="suppliers"
    :kinds-of-button="kindsOfButton"
    :button-function="buttonFunction"
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
      tableHeaders: ['Name'],
      kindsOfButton: ['Edit','Delete']
    }
	},
	methods:{

    ...mapActions([
      'DELETE_SUPPLIERS'
    ]),
    buttonFunction(supplierId,button){
      switch (button){
        case 'Edit':
          this.$router.push({ path:`/suppliers/${supplierId}`})
          this.$destroy
          break
        case 'Delete':
          if (confirm('Are you sure you want to delete supplier?')) {
            this.DELETE_SUPPLIERS(supplierId)
          }
      }
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
