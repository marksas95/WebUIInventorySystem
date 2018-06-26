import ReconciledProduct from '../../pages/reconciledProduct/reconciledProducts'
import MainLayout from '../../layouts/MainLayout.vue'
export default {
  path: '/reconciled-products',
  components: {
    default: MainLayout
  },
  children: [
    {path: '', component: ReconciledProduct}
    ]
}
