import Warehouse from '../../pages/warehouse/Warehouse.vue';
import WarehouseForm from '../../pages/warehouse/WarehouseForm.vue';
import MainLayout from '../../layouts/MainLayout.vue';

export default {
  path: '/warehouses',
  components: {
    default: MainLayout
  },
  children:[
	{path: '' , component: Warehouse},
	{path: ':id' , props: true, component: WarehouseForm}
  ]
	  
  
}
