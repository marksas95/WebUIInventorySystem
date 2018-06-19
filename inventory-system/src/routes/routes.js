import ProductCreate from '../components/products/Create.vue'
import Products from '../pages/products/Products.vue'
import Home from '../pages/Home/Home.vue'
import ProductDetails from '../components/BaseDetails.vue'
import Category from '../pages/category/Category.vue'
import Warehouse from '../pages/warehouse/Warehouse'
import supplierModule from './modules/supplier-module'

export const routes = [
  //{path: '', component: List},
  {path: '/', component:Home},
  {path: '/create', component:ProductCreate},
  {path: '/products', component:Products},
  {path: '/details', component:ProductDetails},
  {path: '/categories', component:Category},
  {path: '/warehouses', component:Warehouse},
  supplierModule
];
