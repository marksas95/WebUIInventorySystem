import Home from '../../pages/Home/Home';
import StockInForm from '../../pages/Home/GoodProduct/StockInForm';
import StockOutForm from '../../pages/Home/GoodProduct/StockOutForm';
import MainLayout from '../../layouts/MainLayout.vue';
import Products from '../../pages/Home/GoodProduct/WarehouseProducts'


export default {
  path: '/',
  components: {
    default: MainLayout
  },
  children: [
    {path: '' , component: Home},
    {path: 'stockIn-form/:id',props: true, component:StockInForm},
    {path: 'stockOut-form/:id',props: true, component:StockOutForm},
    {path: 'good-products/:id',props: true, component:Products},
  ]


}
