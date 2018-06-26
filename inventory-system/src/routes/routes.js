import supplierModule from './modules/supplier-module'
import productModule from './modules/product-module'
import categoryModule from './modules/category-module'
import warehouseModule from './modules/warehouse-module'
import homeModule from './modules/home-module'
import reconcileProductModule from './modules/reconcile-product-module'


export const routes = [
  {path: '*' , redirect: '/'},
  supplierModule,
  productModule,
  categoryModule,
  warehouseModule,
  homeModule,
  reconcileProductModule

];
