<template>
<div>
<supplierHeader/>
    <supplierTable
    :table-headers="tableHeaders"
    :table-data="suppliers"
    :onEdit="editSupplier"
    :onDelete="deleteSupplier"
    :kinds-of-button = "kindsOfButtons"
    />
</div>
      
</template>


<script>
import SupplierHeader from "./SupplierHeader.vue";
import	SupplierTable from "../../components/BaseTable.vue";
import supplier from "../../store/modules/supplier";
import { mapActions } from 'vuex';
export default {
	name: 'Supplier',
	data(){
    return {
      tableHeaders: ['Name'],
      kindsOfButtons: ['Edit', 'Delete']
    }
	},
	methods:{

    ...mapActions([
      'DELETE_SUPPLIERS'
    ]),

    buttonFunction(supplierId,button){
      switch(button){
        case 'Edit':
        this.$router.push({ path:`/suppliers/${supplierId}`})
        

      }


    },
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
    supplierTable: SupplierTable,
    supplierHeader: SupplierHeader
    
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
