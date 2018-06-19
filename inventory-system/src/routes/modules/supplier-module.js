import Supplier from '../../pages/supplier/Supplier.vue'
import SupplierForm from '../../pages/supplier/SupplierForm.vue'
import MainLayout from '../../layouts/MainLayout.vue'
export default {
  path: '/suppliers',
  components: {
    default: MainLayout
  },
  children: [
    {path: '', component: Supplier},
    {path: ':id', props: true, component: SupplierForm}
  ]
}
