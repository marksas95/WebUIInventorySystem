import ProductCreate from '../pages/products/ProductForm.vue'
import ProductDetails from '../components/BaseDetails.vue'
import supplierModule from './modules/supplier-module'
import productModule from './modules/product-module'
import categoryModule from './modules/category-module'
import warehouseModule from './modules/warehouse-module'
import homeModule from './modules/home-module'


export const routes = [
  //{path: '', component: List},
  {path: '/create', component:ProductCreate},
  {path: '/details', component:ProductDetails},
  supplierModule,
  productModule,
  categoryModule,
  warehouseModule,
  homeModule

];
