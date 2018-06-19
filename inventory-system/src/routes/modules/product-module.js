import Product from '../../pages/products/Products'
import ProductForm from '../../pages/products/ProductForm'
import MainLayout from '../../layouts/MainLayout.vue'
export default {
  path: '/products',
  components: {
    default: MainLayout
  },
  children: [
    {path: '', component: Product},
    {path: ':id', props: true, component: ProductForm}
  ]
}
