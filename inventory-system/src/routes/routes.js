import ProductCreate from '../pages/products/ProductForm.vue'
import Home from '../pages/Home/Home.vue'
import ProductDetails from '../components/BaseDetails.vue'
import Warehouse from '../pages/warehouse/Warehouse'
import supplierModule from './modules/supplier-module'
import productModule from './modules/product-module'
import categoryModule from './modules/category-module'


export const routes = [
  //{path: '', component: List},
  {path: '/', component:Home},
  {path: '/create', component:ProductCreate},
  {path: '/details', component:ProductDetails},
  {path: '/warehouses', component:Warehouse},
  supplierModule,
  productModule,
  categoryModule

];
